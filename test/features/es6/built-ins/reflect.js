/* eslint-env mocha */
let reflect = require('../../../../src/features/es6/built-ins/reflect.js')
let featureTest = require('../../featureTest.js')

describe('Reflect Feature', function () {
  it('should find call to Reflect', function () {
    let program = `Reflect.get()`
    featureTest(program, reflect)
  })
})
