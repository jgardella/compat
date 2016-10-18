/* eslint-env mocha */
let functionSubclassing = require('../../../../src/features/es6/subclassing/function.js')
let featureTest = require('../../featureTest.js')

describe('Function is subclassable Feature', function () {
  it('should find parent class Function', function () {
    let program = `class C extends Function {}`
    featureTest(program, functionSubclassing)
  })
})
