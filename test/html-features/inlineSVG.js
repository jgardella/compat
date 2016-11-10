/* eslint-env mocha */
let inlineSVGFeature = require('../../src/html/features/inlineSVG.js')
let featureTest = require('./featureTest.js')

describe('Inline SVG in HTML5', function () {
  it('should find inline svg element', function () {
    let html = `<svg height=86 width=90></svg>`
    featureTest(html, inlineSVGFeature)
  })
})
