/* eslint-env mocha */
let sandboxAttributeForIframesFeature = require('../../src/html/features/sandboxAttributeForIframes.js')
let featureTest = require('./featureTest.js')

describe('sandbox attribute for iframes', function () {
  it('should find iframe tag with sandbox attribute', function () {
    let html = `<iframe sandbox="allow-forms"></iframe>`
    featureTest(html, sandboxAttributeForIframesFeature)
  })
})
