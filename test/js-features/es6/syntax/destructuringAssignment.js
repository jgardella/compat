/* eslint-env mocha */
let destructuringAssignment = require('../../../../src/js/features/es6/syntax/destructuringAssignment.js')
let featureTest = require('../../featureTest.js')

describe('Destructuring Assignment Feature', function () {
  it('should find array destructuring assignment', function () {
    let program = `var a, b, c; [a, b, c] = [1, 2, 3]`
    featureTest(program, destructuringAssignment)
  })

  it('should find object destructuring assignment', function () {
    let program = `var a, b, c; ({a, b, c} = {a: 1, b: 2, c: 3})`
    featureTest(program, destructuringAssignment)
  })
})
