/* eslint-env mocha */
let patternAttributeFeature = require('../../../src/html/features/form/validation/patternAttribute.js')
let minLengthAttributeFeature = require('../../../src/html/features/form/validation/minLengthAttribute.js')
let maxLengthAttributeFeature = require('../../../src/html/features/form/validation/maxLengthAttribute.js')
let featureTest = require('../featureTest.js')

describe('Form Validation', function () {
  it('should find input pattern attribute', function () {
    let program = `<input pattern='blah'></input>`
    featureTest(program, patternAttributeFeature)
  })

  it('should find input minlength attribute', function () {
    let program = `<input minlength=24></input>`
    featureTest(program, minLengthAttributeFeature)
  })

  it('should find input maxlength attribute', function () {
    let program = `<input maxlength=24></input>`
    featureTest(program, maxLengthAttributeFeature)
  })

  it('should find textarea maxlength attribute', function () {
    let program = `<textarea maxlength=24></input>`
    featureTest(program, maxLengthAttributeFeature)
  })
})
