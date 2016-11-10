/* eslint-env mocha */
let colorInputTypeFeature = require('../../../src/html/features/form/colorInputType.js')
let featureTest = require('../featureTest.js')

describe('Color input type', function () {
  it('should find color input', function () {
    let html = `<input type="color">`
    featureTest(html, colorInputTypeFeature)
  })
})
