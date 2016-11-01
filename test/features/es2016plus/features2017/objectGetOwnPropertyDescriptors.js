/* eslint-env mocha */
let objectGetOwnPropertyDescriptors = require('../../../../src/features/es2016plus/features2017/objectGetOwnPropertyDescriptors.js')
let featureTest = require('../../featureTest.js')

describe('Object.getOwnPropertyDescriptors Feature', function () {
  it('should find Object.getOwnPropertyDescriptors call', function () {
    let program = `Object.getOwnPropertyDescriptors()`
    featureTest(program, objectGetOwnPropertyDescriptors)
  })

  it('should find Object.getOwnPropertyDescriptors member', function () {
    let program = `Object.getOwnPropertyDescriptors`
    featureTest(program, objectGetOwnPropertyDescriptors)
  })
})
