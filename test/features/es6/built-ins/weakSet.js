/* eslint-env mocha */
let weakSet = require('../../../../src/features/es6/built-ins/weakSet.js')
let featureTest = require('../../featureTest.js')

describe('WeakSet Feature', function () {
  it('should find new WeakSet', function () {
    let program = `new WeakSet()`
    featureTest(program, weakSet)
  })
})
