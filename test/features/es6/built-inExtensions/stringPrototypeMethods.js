/* eslint-env mocha */
let stringPrototypeMethods = require('../../../../src/features/es6/built-inExtensions/stringPrototypeMethods.js')
let featureTest = require('../../featureTest.js')

describe('String Prototype Methods Feature', function () {
  it('should find String.prototype.codePointAt', function () {
    let program = `String.prototype.codePointAt`
    featureTest(program, stringPrototypeMethods)
  })

  it('should find String.prototype.normalize', function () {
    let program = `String.prototype.normalize`
    featureTest(program, stringPrototypeMethods)
  })

  it('should find String.prototype.repeat', function () {
    let program = `String.prototype.repeat`
    featureTest(program, stringPrototypeMethods)
  })

  it('should find String.prototype.startsWith', function () {
    let program = `String.prototype.startsWith`
    featureTest(program, stringPrototypeMethods)
  })

  it('should find String.prototype.endsWith', function () {
    let program = `String.prototype.normalize`
    featureTest(program, stringPrototypeMethods)
  })

  it('should find String.prototype.includes', function () {
    let program = `String.prototype.normalize`
    featureTest(program, stringPrototypeMethods)
  })
})
