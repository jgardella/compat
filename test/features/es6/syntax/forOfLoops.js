/* eslint-env mocha */
let forOfLoops = require('../../../../src/features/es6/syntax/forOfLoops.js')
let featureTest = require('../../featureTest.js')

describe('for..of Loops Feature', function () {
  it('should find', function () {
    let program = `for (var x of [5]) {}`
    featureTest(program, forOfLoops)
  })
})
