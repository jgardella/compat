/* eslint-env mocha */
let numberProperties = require('../../../../src/features/es6/built-inExtensions/numberProperties.js')
let featureTest = require('../../featureTest.js')

describe('Number Properties Feature', function () {
  it('should find Number.isFinite', function () {
    let program = `Number.isFinite`
    featureTest(program, numberProperties)
  })

  it('should find Number.isInteger', function () {
    let program = `Number.isInteger`
    featureTest(program, numberProperties)
  })

  it('should find Number.isSafeInteger', function () {
    let program = `Number.isSafeInteger`
    featureTest(program, numberProperties)
  })

  it('should find Number.isNaN', function () {
    let program = `Number.isNaN`
    featureTest(program, numberProperties)
  })

  it('should find Number.EPSILON', function () {
    let program = `Number.EPSILON`
    featureTest(program, numberProperties)
  })

  it('should find Number.MIN_SAFE_INTEGER', function () {
    let program = `Number.MIN_SAFE_INTEGER`
    featureTest(program, numberProperties)
  })

  it('should find Number.MAX_SAFE_INTEGER', function () {
    let program = `Number.MAX_SAFE_INTEGER`
    featureTest(program, numberProperties)
  })
})
