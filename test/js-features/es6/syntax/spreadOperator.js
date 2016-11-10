/* eslint-env mocha */
let spreadOperator = require('../../../../src/js/features/es6/syntax/spreadOperator.js')
let featureTest = require('../../featureTest.js')

describe('Spread Operator Feature', function () {
  it('should find in function call', function () {
    let program = `f(...[1, 2, 3]);`
    featureTest(program, spreadOperator)
  })
})
