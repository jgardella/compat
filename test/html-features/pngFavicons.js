/* eslint-env mocha */
let pngFaviconsFeature = require('../../src/html/features/pngFavicons.js')
let featureTest = require('./featureTest.js')

describe('PNG Favicons', function () {
  it('should find icon using PNG', function () {
    let html = `<link rel="icon" href="favicon.png" type="image/png">`
    featureTest(html, pngFaviconsFeature)
  })
})
