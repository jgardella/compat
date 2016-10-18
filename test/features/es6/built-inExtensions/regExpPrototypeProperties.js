/* eslint-env mocha */
let regExpPrototypeProperties = require('../../../../src/features/es6/built-inExtensions/regExpPrototypeProperties.js')
let featureTest = require('../../featureTest.js')

describe('RegExp Prototype Properties Feature', function () {
  it('should find RegExp.prototype.flags', function () {
    let program = `RegExp.prototype.flags`
    featureTest(program, regExpPrototypeProperties)
  })

  it('should find RegExp.prototype[Symbol.match]', function () {
    let program = `RegExp.prototype[Symbol.match]`
    featureTest(program, regExpPrototypeProperties)
  })

  it('should find RegExp.prototype[Symbol.replace]', function () {
    let program = `RegExp.prototype[Symbol.replace]`
    featureTest(program, regExpPrototypeProperties)
  })

  it('should find RegExp.prototype[Symbol.split]', function () {
    let program = `RegExp.prototype[Symbol.split]`
    featureTest(program, regExpPrototypeProperties)
  })

  it('should find RegExp.prototype[Symbol.search]', function () {
    let program = `RegExp.prototype[Symbol.search]`
    featureTest(program, regExpPrototypeProperties)
  })
})
