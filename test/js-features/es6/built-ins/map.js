/* eslint-env mocha */
let map = require('../../../../src/js/features/es6/built-ins/map.js')
let featureTest = require('../../featureTest.js')

describe('Map Feature', function () {
  it('should find new Map', function () {
    let program = `new Map()`
    featureTest(program, map)
  })
})
