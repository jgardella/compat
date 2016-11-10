/* eslint-env mocha */
let patternAttributeFeature = require('../../../../src/html/features/form/validation/patternAttributeForInputFields.js')
let featureTest = require('../../featureTest.js')

describe('Pattern attribute for input fields', function () {
  it('should find input pattern attribute', function () {
    let program = `<input pattern='blah'></input>`
    featureTest(program, patternAttributeFeature)
  })
})
