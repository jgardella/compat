/* eslint-env mocha */
let promise = require('../../../../src/features/es6/built-ins/promise.js')
let featureTest = require('../../featureTest.js')

describe('Promise Feature', function () {
  it('should find new Promise', function () {
    let program = `new Promise(function (resolve, reject) { resolve() })`
    featureTest(program, promise)
  })
})
