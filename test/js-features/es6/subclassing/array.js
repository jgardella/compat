/* eslint-env mocha */
let arraySubclassing = require('../../../../src/js/features/es6/subclassing/array.js')
let featureTest = require('../../featureTest.js')

describe('Array is subclassable Feature', function () {
  it('should find parent class Array', function () {
    let program = `class C extends Array {}`
    featureTest(program, arraySubclassing)
  })
})
