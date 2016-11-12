// Copyright 2012 Dan Wolff | danwolff.se
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// // The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// Adapted from https://github.com/kangax/compat-table/blob/gh-pages/build.js
module.exports.buildTable = (es6Data, es2016PlusData) => {
  var es6 = require(es6Data)
  var es2016plus = require(es2016PlusData)
  let es6Table = getNewTable(es6)
  let es2016PlusTable = getNewTable(es2016plus)

  return Object.assign(es6Table, es2016PlusTable)
}

function createBrowsersObject (options) {
  var obj = {}

  Object.keys(options.browsers).forEach((browserId) => {
    const browserInfo = options.browsers[browserId]

    if (obj[browserInfo.full] === undefined) {
      obj[browserInfo.full] = {}
    }

    obj[browserInfo.full][browserId] = browserInfo
  })

  return obj
}

function getNewTable (options) {
  var obj = {
    envs: createBrowsersObject(options),
    compat: createCompatObject(options.browsers, options.tests, options.compiler)
  }

  return createCompatObject(options.browsers, options.tests, options.compiler)
}

function createCompatObject (rawBrowsers, tests, compiler) {
  var obj = {}
  // rawBrowsers includes very obsolete browsers which mustn't be printed, but should
  // be used by interpolateResults(). All other uses should use this, which filters
  // the very obsolete ones out.
  var browsers = Object.keys(rawBrowsers).reduce(function (obj, e) {
    var browser = rawBrowsers[e]
    if (browser.obsolete !== 'very') {
      obj[e] = browser
    }
    // Even if it's very obsolete, include its footnote if it has one
    return obj
  }, {})

  function interpolateResults (res) {
    var browser, prevBrowser, result, prevResult, bid, prevBid
    // For each browser, check if the previous browser has the same
    // browser full name (e.g. Firefox) or family name (e.g. Chakra) as this one.
    for (bid in rawBrowsers) {
      browser = rawBrowsers[bid]
      if (prevBrowser &&
          (prevBrowser.full.replace(/,.+$/, '') === browser.full.replace(/,.+$/, '') ||
          (browser.family !== undefined && prevBrowser.family === browser.family))) {
        // For each test, check if the previous browser has a result
        // that this browser lacks.
        result = res[bid]
        prevResult = res[prevBid]
        if (prevResult !== undefined && result === undefined) {
          res[bid] = prevResult
        }
      }
      prevBrowser = browser
      prevBid = bid
    }
    // For browsers that are essentially equal to other browsers,
    // copy over the results.
    for (bid in rawBrowsers) {
      browser = rawBrowsers[bid]
      if (browser.equals) {
        result = res[browser.equals]
        res[bid] = browser.ignore_flagged && result === 'flagged' ? false : result
      }
    }
  }

  function testValue (result) {
    if (result && typeof result === 'object' && 'val' in result) {
      return result.val
    }
    return result
  }

  // Now print the results.
  tests.forEach(function (t, testNum) {
    // Calculate the result totals for tests which consist solely of subtests.
    if ('subtests' in t) {
      t.subtests.forEach(function (e) {
        interpolateResults(e.res)
      })
    } else {
      interpolateResults(t.res)
    }

    var id = t.name

    // Print all the results for the subtests
    if ('subtests' in t) {
      t.subtests.forEach(function (subtest) {
        var subtestName = subtest.name
        var subtestId = id + '_' + subtestName
        obj[subtestId] = subtest.res
      })
    }

    // Print all the results for the main test
    Object.keys(browsers).forEach(function (browserId) {
      // For supertests, calculate the tally and total
      if ('subtests' in t) {
        var tally = 0
        var outOf = 0
        var flaggedTally = 0

        t.subtests.forEach(function (e) {
          var result = e.res[browserId]

          tally += testValue(result) === true
          flaggedTally += ['flagged', 'strict'].indexOf(testValue(result)) > -1
          outOf += 1
        })
        var grade = (tally / outOf)

        if (obj[id] === undefined) {
          obj[id] = {}
        }
        if (grade === 1.0) {
          if (flaggedTally > 0) {
            obj[id][browserId] = 'flag'
          } else {
            obj[id][browserId] = true
          }
        } else if (grade === 0.0) {
          obj[id][browserId] = false
        } else {
          obj[id][browserId] = grade
        }
      } else {
        // For single tests
        var result = t.res
        obj[id] = result
      }
    })
  })

  return obj
}
