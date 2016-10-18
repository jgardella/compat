/* eslint-env mocha */
let superFeature = require('../../../../src/features/es6/functions/super.js')
let featureTest = require('../../featureTest.js')

describe('Super Feature', function () {
  it('should find super function', function () {
    let program = `class C { constructor() { super(); } }`
    featureTest(program, superFeature)
  })
})
