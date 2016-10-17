/* eslint-env mocha */
let destructuringParameters = require('../../../../src/features/es6/syntax/destructuringParameters.js')
let featureTest = require('../../featureTest.js')

describe('Destructuring Parameters Feature', function () {
  it('should find array destructuring parameter in named function', function () {
    let program = `function foo ([a, b, c]) {}`
    featureTest(program, destructuringParameters)
  })

  it('should find object destructuring parameter in named function', function () {
    let program = `function foo ({a, b, c}) {}`
    featureTest(program, destructuringParameters)
  })

  it('should find array destructuring parameter in arrow function', function () {
    let program = `([a, b, c]) => {}`
    featureTest(program, destructuringParameters)
  })

  it('should find object destructuring parameter in arrow function', function () {
    let program = `({a, b, c}) => {}`
    featureTest(program, destructuringParameters)
  })
})
