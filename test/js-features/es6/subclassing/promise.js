/* eslint-env mocha */
let promiseSubclassing = require('../../../../src/js/features/es6/subclassing/promise.js')
let featureTest = require('../../featureTest.js')

describe('Promise is subclassable Feature', function () {
  it('should find parent class Promise', function () {
    let program = `class C extends Promise {}`
    featureTest(program, promiseSubclassing)
  })
})
