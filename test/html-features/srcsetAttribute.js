/* eslint-env mocha */
let srcsetAttributeFeature = require('../../src/html/features/srcsetAttribute.js')
let featureTest = require('./featureTest.js')

describe('srcset attribute', function () {
  it('should find img with srcset attribute', function () {
    let html = `<img srcset="/images/small.jpg 1.5x, /images/large.jpg 2x"></img>`
    featureTest(html, srcsetAttributeFeature)
  })
})
