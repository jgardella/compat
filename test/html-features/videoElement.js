/* eslint-env mocha */
let videoElementFeature = require('../../src/html/features/videoElement.js')
let featureTest = require('./featureTest.js')

describe('Video element', function () {
  it('should find video element', function () {
    let html = `<video></video>`
    featureTest(html, videoElementFeature)
  })
})
