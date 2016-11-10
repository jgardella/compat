/* eslint-env mocha */
let generators = require('../../../../src/js/features/es6/functions/generators.js')
let featureTest = require('../../featureTest.js')

describe('Generators Feature', function () {
  it('should find generator function', function () {
    let program = `function * generator() {}`
    featureTest(program, generators)
  })
})
