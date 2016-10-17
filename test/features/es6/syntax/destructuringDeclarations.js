/* eslint-env mocha */
let destructuringDeclarations = require('../../../../src/features/es6/syntax/destructuringDeclarations.js')
let featureTest = require('../../featureTest.js')

describe('Destructuring Declarations Feature', function () {
  it('should find array destructuring declaration', function () {
    let program = `var [a, b, c] = "ab"`
    featureTest(program, destructuringDeclarations)
  })

  it('should find object destructuring declaration', function () {
    let program = `var {c, x:d, e} = {c:7, x:8}`
    featureTest(program, destructuringDeclarations)
  })
})
