/* eslint-env mocha */
let restParameters = require('../../../../src/js/features/es6/syntax/restParameters.js')
let featureTest = require('../../featureTest.js')

describe('Rest Parameters Feature', function () {
  it('should find in named function', function () {
    let program = `function f(a, ...b) {}`
    featureTest(program, restParameters)
  })

  it('should find in anonymous function', function () {
    let program = `(a, ...b) => {}`
    featureTest(program, restParameters)
  })
})
