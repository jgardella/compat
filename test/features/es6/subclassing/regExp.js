/* eslint-env mocha */
let regExpSubclassing = require('../../../../src/features/es6/subclassing/regExp.js')
let featureTest = require('../../featureTest.js')

describe('RegExp is subclassable Feature', function () {
  it('should find parent class RegExp', function () {
    let program = `class C extends RegExp {}`
    featureTest(program, regExpSubclassing)
  })
})
