/* eslint-env mocha */
let svgFaviconsFeature = require('../../src/html/features/svgFavicons.js')
let featureTest = require('./featureTest.js')

describe('SVG Favicons', function () {
  it('should find icon using SVG', function () {
    let html = `<link rel="icon" href="favicon.svg" sizes="any" type="image/svg+xml">`
    featureTest(html, svgFaviconsFeature)
  })
})
