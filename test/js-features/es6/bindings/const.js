/* eslint-env mocha */
let constFeature = require('../../../../src/js/features/es6/bindings/const.js')
let featureTest = require('../../featureTest.js')

describe('Const Feature', function () {
  it('should find variable declaration', function () {
    let program = `const x = 4;`
    featureTest(program, constFeature)
  })

  it('should find for loop initializer', function () {
    let program = `for (const i = 0; false;) {}`
    featureTest(program, constFeature)
  })

  it('should find for-in loop', function () {
    let program = `for (const i in {}) {}`
    featureTest(program, constFeature)
  })

  it('should find for-of loop', function () {
    let program = `for (const i of []) {}`
    featureTest(program, constFeature)
  })
})
