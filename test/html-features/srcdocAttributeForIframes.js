/* eslint-env mocha */
let srcdocAttributeForIframesFeature = require('../../src/html/features/srcdocAttributeForIframes.js')
let featureTest = require('./featureTest.js')

describe('srcdoc attribute for iframes', function () {
  it('should find srcdoc attribute on iframe', function () {
    let html = `<iframe srcdoc="<p>foo</p>"></iframe>`
    featureTest(html, srcdocAttributeForIframesFeature)
  })
})
