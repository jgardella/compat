/* eslint-env mocha */
let spellcheckAttributeFeature = require('../../src/html/features/spellcheckAttribute.js')
let featureTest = require('./featureTest.js')

describe('Spellcheck attribute', function () {
  it('should find textarea with spellcheck attribute', function () {
    let html = `<textarea spellcheck="true"></textarea>`
    featureTest(html, spellcheckAttributeFeature)
  })

  it('should find input with spellcheck attribute', function () {
    let html = `<input spellcheck="true">`
    featureTest(html, spellcheckAttributeFeature)
  })
})
