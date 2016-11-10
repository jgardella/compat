/* eslint-env mocha */
let autofocusAttributeFeature = require('../../src/html/features/autofocusAttribute.js')
let featureTest = require('./featureTest.js')

describe('autofocus attribute', function () {
  it('should find autofocus attribute', function () {
    let html = `<input autofocus>`
    featureTest(html, autofocusAttributeFeature)
  })
})
