/* eslint-env mocha */
let classFeature = require('../../../../src/js/features/es6/functions/class.js')
let featureTest = require('../../featureTest.js')

describe('Class Feature', function () {
  it('should find named class', function () {
    let program = `class C {}`
    featureTest(program, classFeature)
  })

  it('should find anonymous class', function () {
    let program = `typeof class {}`
    featureTest(program, classFeature)
  })
})
