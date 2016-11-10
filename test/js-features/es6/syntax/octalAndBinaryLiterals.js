/* eslint-env mocha */
let octalLiterals = require('../../../../src/js/features/es6/syntax/octalAndBinaryLiterals/octalLiterals.js')
let binaryLiterals = require('../../../../src/js/features/es6/syntax/octalAndBinaryLiterals/binaryLiterals.js')
let featureTest = require('../../featureTest.js')

describe('Octal and Binary Literals Feature', function () {
  it('should find lowercase octal literal', function () {
    let program = `0o4`
    featureTest(program, octalLiterals)
  })

  it('should find uppercase octal literal', function () {
    let program = `0O4`
    featureTest(program, octalLiterals)
  })

  it('should find lowercase binary literal', function () {
    let program = `0b01`
    featureTest(program, binaryLiterals)
  })

  it('should find uppercase octal literal', function () {
    let program = `0B01`
    featureTest(program, binaryLiterals)
  })
})
