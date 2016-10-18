/* eslint-env mocha */
let proxy = require('../../../../src/features/es6/built-ins/proxy.js')
let featureTest = require('../../featureTest.js')

describe('Proxy Feature', function () {
  it('should find new Proxy', function () {
    let program = `new Proxy()`
    featureTest(program, proxy)
  })
})
