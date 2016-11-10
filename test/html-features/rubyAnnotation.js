/* eslint-env mocha */
let rubyAnnotationFeature = require('../../src/html/features/rubyAnnotation.js')
let featureTest = require('./featureTest.js')

describe('Ruby annotation', function () {
  it('should find ruby element', function () {
    let html = `<ruby>B<rt>annotation</ruby>`
    featureTest(html, rubyAnnotationFeature)
  })
})
