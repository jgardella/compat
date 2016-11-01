/* eslint-env mocha */
let arrayPrototypeIncludes = require('../../../../src/features/es2016plus/features2016/arrayPrototypeIncludes.js')
let featureTest = require('../../featureTest.js')

describe('Array.prototype.includes Feature', function () {
  it('should find Array.prototype.includes on array literal', function () {
    let program = `[1, 2, 3].includes(1);`
    featureTest(program, arrayPrototypeIncludes)
  })
})
