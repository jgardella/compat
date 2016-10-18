/* eslint-env mocha */
let weakMap = require('../../../../src/features/es6/built-ins/weakMap.js')
let featureTest = require('../../featureTest.js')

describe('WeakMap Feature', function () {
  it('should find new WeakMap', function () {
    let program = `new WeakMap()`
    featureTest(program, weakMap)
  })
})
