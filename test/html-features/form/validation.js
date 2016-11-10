/* eslint-env mocha */
let patternAttributeFeature = require('../../../src/html/features/form/validation/patternAttribute.js')
let minLengthAttributeFeature = require('../../../src/html/features/form/validation/minLengthAttribute.js')
let maxLengthAttributeFeature = require('../../../src/html/features/form/validation/maxLengthAttribute.js')
let featureTest = require('../featureTest.js')

describe('Form Validation', function () {
  it('should find input pattern attribute', function () {
    let html = `<input pattern='blah'>`
    featureTest(html, patternAttributeFeature)
  })

  it('should find input minlength attribute', function () {
    let html = `<input minlength=24>`
    featureTest(html, minLengthAttributeFeature)
  })

  it('should find input maxlength attribute', function () {
    let html = `<input maxlength=24>`
    featureTest(html, maxLengthAttributeFeature)
  })

  it('should find textarea maxlength attribute', function () {
    let html = `<textarea maxlength=24></textarea>`
    featureTest(html, maxLengthAttributeFeature)
  })
})
