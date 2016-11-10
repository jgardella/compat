/* eslint-env mocha */
let classExtendsNull = require('../../../../src/js/features/es2016plus/misc2017/classExtendsNull.js')
let featureTest = require('../../featureTest.js')

describe('class extends null Feature', function () {
  it('should find class extends null', function () {
    let program = `class C extends null {}`
    featureTest(program, classExtendsNull)
  })
})
