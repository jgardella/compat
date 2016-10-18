/* eslint-env mocha */
let datePrototypeSymbol = require('../../../../src/features/es6/built-inExtensions/datePrototypeSymbol.js')
let featureTest = require('../../featureTest.js')

describe('Date.prototype[Symbol.toPrimitive] Feature', function () {
  it('should find Date.prototype[Symbol.toPrimitive]', function () {
    let program = `Date.prototype[Symbol.toPrimitive]`
    featureTest(program, datePrototypeSymbol)
  })
})
