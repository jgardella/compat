/* eslint-env mocha */
let featureTest = require('../../featureTest.js')
let templateLiterals = require('../../../../src/js/features/es6/syntax/templateLiterals.js')

describe('Template Literals Feature', function () {
  it('should find template literal', function () {
    let program = '`foo bar`'
    featureTest(program, templateLiterals)
  })
})
