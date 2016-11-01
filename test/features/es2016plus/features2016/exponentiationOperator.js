/* eslint-env mocha */
let exponentiationOperator = require('../../../../src/features/es2016plus/features2016/exponentiationOperator.js')
let featureTest = require('../../featureTest.js')

describe('Exponentiation Operator Feature', function () {
  it('should find exponentiation operator', function () {
    let program = `2**4;`
    featureTest(program, exponentiationOperator)
  })

  it('should find exponentiation assignment', function () {
    let program = `let x = 2; x **= 4;`
    featureTest(program, exponentiationOperator)
  })
})
