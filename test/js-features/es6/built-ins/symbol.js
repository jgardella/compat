/* eslint-env mocha */
let symbol = require('../../../../src/js/features/es6/built-ins/symbol.js')
let featureTest = require('../../featureTest.js')

describe('Symbol Feature', function () {
  it('should find Symbol', function () {
    let program = `var symbol = Symbol()`
    featureTest(program, symbol)
  })
})
