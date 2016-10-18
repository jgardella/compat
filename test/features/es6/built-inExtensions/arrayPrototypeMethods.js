/* eslint-env mocha */
let arrayPrototypeMethods = require('../../../../src/features/es6/built-inExtensions/arrayPrototypeMethods.js')
let featureTest = require('../../featureTest.js')

describe('Array Prototype Methods Feature', function () {
  it('should find Array.prototype.copyWithin', function () {
    let program = `Array.prototype.copyWithin`
    featureTest(program, arrayPrototypeMethods)
  })

  it('should find Array.prototype.find', function () {
    let program = `Array.prototype.find`
    featureTest(program, arrayPrototypeMethods)
  })

  it('should find Array.prototype.findIndex', function () {
    let program = `Array.prototype.findIndex`
    featureTest(program, arrayPrototypeMethods)
  })

  it('should find Array.prototype.fill', function () {
    let program = `Array.prototype.fill`
    featureTest(program, arrayPrototypeMethods)
  })

  it('should find Array.prototype.keys', function () {
    let program = `Array.prototype.keys`
    featureTest(program, arrayPrototypeMethods)
  })

  it('should find Array.prototype.values', function () {
    let program = `Array.prototype.values`
    featureTest(program, arrayPrototypeMethods)
  })

  it('should find Array.prototype.entries', function () {
    let program = `Array.prototype.entries`
    featureTest(program, arrayPrototypeMethods)
  })
})
