/* eslint-env mocha */
let arrayStaticMethods = require('../../../../src/js/features/es6/built-inExtensions/arrayStaticMethods.js')
let featureTest = require('../../featureTest.js')

describe('Array Static Methods Feature', function () {
  it('should find Array.from', function () {
    let program = `Array.from`
    featureTest(program, arrayStaticMethods)
  })

  it('should find Array.of', function () {
    let program = `Array.of`
    featureTest(program, arrayStaticMethods)
  })
})
