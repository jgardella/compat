/* eslint-env mocha */
let audioElementFeature = require('../../src/html/features/audioElement.js')
let featureTest = require('./featureTest.js')

describe('Audio element', function () {
  it('should find audio element', function () {
    let html = `<audio></audio>`
    featureTest(html, audioElementFeature)
  })
})
