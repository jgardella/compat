/* eslint-env mocha */
let objectEntries = require('../../../../src/js/features/es2016plus/features2017/objectEntries.js')
let featureTest = require('../../featureTest.js')

describe('Object.entries Feature', function () {
  it('should find Object.entries call', function () {
    let program = `Object.entries()`
    featureTest(program, objectEntries)
  })

  it('should find Object.entries member', function () {
    let program = `Object.entries`
    featureTest(program, objectEntries)
  })
})
