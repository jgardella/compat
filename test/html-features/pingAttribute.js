/* eslint-env mocha */
let pingAttributeFeature = require('../../src/html/features/pingAttribute.js')
let featureTest = require('./featureTest.js')

describe('Ping attribute', function () {
  it('should find anchor tag with ping attribute', function () {
    let html = `<a ping></a>`
    featureTest(html, pingAttributeFeature)
  })
})
