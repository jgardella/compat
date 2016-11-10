/* eslint-env mocha */
let objectStaticMethods = require('../../../../src/js/features/es6/built-inExtensions/objectStaticMethods.js')
let featureTest = require('../../featureTest.js')

describe('Object Static Methods Feature', function () {
  it('should find Object.assign', function () {
    let program = `Object.assign`
    featureTest(program, objectStaticMethods)
  })

  it('should find Object.is', function () {
    let program = `Object.is`
    featureTest(program, objectStaticMethods)
  })

  it('should find Object.getOwnPropertySymbols', function () {
    let program = `Object.getOwnPropertySymbols`
    featureTest(program, objectStaticMethods)
  })

  it('should find Object.setPrototypeOf', function () {
    let program = `Object.setPrototypeOf`
    featureTest(program, objectStaticMethods)
  })
})
