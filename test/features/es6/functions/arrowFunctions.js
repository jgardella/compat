/* eslint-env mocha */
let arrowFunctions = require('../../../../src/features/es6/functions/arrowFunctions.js')
let featureTest = require('../../featureTest.js')

describe('Arrow Functions Feature', function () {
  it('should find arrow function', function () {
    let program = `() => {}`
    featureTest(program, arrowFunctions)
  })
})
