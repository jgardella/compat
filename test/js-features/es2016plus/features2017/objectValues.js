/* eslint-env mocha */
let objectValues = require('../../../../src/js/features/es2016plus/features2017/objectValues.js')
let featureTest = require('../../featureTest.js')

describe('Object.values Feature', function () {
  it('should find Object.values call', function () {
    let program = `Object.values()`
    featureTest(program, objectValues)
  })

  it('should find Object.values member', function () {
    let program = `Object.values`
    featureTest(program, objectValues)
  })
})
