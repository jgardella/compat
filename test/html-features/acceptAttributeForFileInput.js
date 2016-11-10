/* eslint-env mocha */
let acceptAttributeForFileInputFeature = require('../../src/html/features/acceptAttributeForFileInput.js')
let featureTest = require('./featureTest.js')

describe('accept attribute for file input', function () {
  it('should find accept attribute on file input', function () {
    let html = `<input type="file" accept="image/*"></input>`
    featureTest(html, acceptAttributeForFileInputFeature)
  })
})
