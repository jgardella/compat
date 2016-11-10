/* eslint-env mocha */
let mathMethods = require('../../../../src/js/features/es6/built-inExtensions/mathMethods.js')
let featureTest = require('../../featureTest.js')

describe('Math Methods Feature', function () {
  it('should find Math.clz32', function () {
    let program = `Math.clz32`
    featureTest(program, mathMethods)
  })

  it('should find Math.imul', function () {
    let program = `Math.imul`
    featureTest(program, mathMethods)
  })

  it('should find Math.sign', function () {
    let program = `Math.sign`
    featureTest(program, mathMethods)
  })

  it('should find Math.log10', function () {
    let program = `Math.log10`
    featureTest(program, mathMethods)
  })

  it('should find Math.log2', function () {
    let program = `Math.log2`
    featureTest(program, mathMethods)
  })

  it('should find Math.log1p', function () {
    let program = `Math.log1p`
    featureTest(program, mathMethods)
  })

  it('should find Math.expm1', function () {
    let program = `Math.expm1`
    featureTest(program, mathMethods)
  })

  it('should find Math.cosh', function () {
    let program = `Math.cosh`
    featureTest(program, mathMethods)
  })

  it('should find Math.sinh', function () {
    let program = `Math.sinh`
    featureTest(program, mathMethods)
  })

  it('should find Math.tanh', function () {
    let program = `Math.tanh`
    featureTest(program, mathMethods)
  })

  it('should find Math.acosh', function () {
    let program = `Math.acosh`
    featureTest(program, mathMethods)
  })

  it('should find Math.asinh', function () {
    let program = `Math.asinh`
    featureTest(program, mathMethods)
  })

  it('should find Math.atanh', function () {
    let program = `Math.atanh`
    featureTest(program, mathMethods)
  })

  it('should find Math.trunc', function () {
    let program = `Math.trunc`
    featureTest(program, mathMethods)
  })

  it('should find Math.fround', function () {
    let program = `Math.fround`
    featureTest(program, mathMethods)
  })

  it('should find Math.cbrt', function () {
    let program = `Math.cbrt`
    featureTest(program, mathMethods)
  })

  it('should find Math.hypot', function () {
    let program = `Math.hypot`
    featureTest(program, mathMethods)
  })
})
