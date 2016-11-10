/* eslint-env mocha */
let stringStaticMethods = require('../../../../src/js/features/es6/built-inExtensions/stringStaticMethods.js')
let featureTest = require('../../featureTest.js')

describe('String Static Methods Feature', function () {
  it('should find String.raw', function () {
    let program = `String.raw`
    featureTest(program, stringStaticMethods)
  })

  it('should find String.fromCodePoint', function () {
    let program = `String.fromCodePoint`
    featureTest(program, stringStaticMethods)
  })
})
