/* eslint-env mocha */
let padStart = require('../../../../src/features/es2016plus/features2017/stringPadding/padStart.js')
let padEnd = require('../../../../src/features/es2016plus/features2017/stringPadding/padEnd.js')
let featureTest = require('../../featureTest.js')

describe('String.prototype.padStart Feature', function () {
  it('should find padStart call on string literal', function () {
    let program = `'123'.padStart(10)`
    featureTest(program, padStart)
  })

  it('should find padStart call on String prototype', function () {
    let program = `String.padStart('123', 10)`
    featureTest(program, padStart)
  })

  it('should find padEnd call on string literal', function () {
    let program = `'123'.padEnd(10)`
    featureTest(program, padEnd)
  })

  it('should find padEnd call on String prototype', function () {
    let program = `String.padEnd('123', 10)`
    featureTest(program, padEnd)
  })
})
