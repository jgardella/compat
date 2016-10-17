/* eslint-env mocha */
let newTarget = require('../../../../src/features/es6/syntax/newTarget.js')
let featureTest = require('../../featureTest.js')

describe('new.target Feature', function () {
  it('should find new.target', function () {
    let program = `new function f() { (new.target === f) }`
    featureTest(program, newTarget)
  })
})
