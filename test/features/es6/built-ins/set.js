/* eslint-env mocha */
let set = require('../../../../src/features/es6/built-ins/set.js')
let featureTest = require('../../featureTest.js')

describe('Set Feature', function () {
  it('should find new Set', function () {
    let program = `new Set()`
    featureTest(program, set)
  })
})
