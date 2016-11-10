/* eslint-env mocha */
let downloadAttributeFeature = require('../../src/html/features/downloadAttribute.js')
let featureTest = require('./featureTest.js')

describe('Download attribute', function () {
  it('should find anchor tag with download attribute', function () {
    let html = `<a download></a>`
    featureTest(html, downloadAttributeFeature)
  })
})
