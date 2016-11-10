/* eslint-env mocha */
let datasetAttributesFeature = require('../../src/html/features/datasetAttributes.js')
let featureTest = require('./featureTest.js')

describe('dataset & data-* attributes', function () {
  it('should find data-* attribute', function () {
    let html = `<p data-name="foo"></p>`
    featureTest(html, datasetAttributesFeature)
  })
})
