/* eslint-env mocha */
let inputPlaceholderAttributeFeature = require('../../../src/html/features/form/inputPlaceholderAttribute.js')
let featureTest = require('../featureTest.js')

describe('input placeholder attribute', function () {
  it('should find input placeholder attribute', function () {
    let html = `<input placeholder="foo">`
    featureTest(html, inputPlaceholderAttributeFeature)
  })
})
