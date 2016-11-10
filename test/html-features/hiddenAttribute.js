/* eslint-env mocha */
let hiddenAttributeFeature = require('../../src/html/features/hiddenAttribute.js')
let featureTest = require('./featureTest.js')

describe('hidden attribute', function () {
  it('should find hidden attribute', function () {
    let html = `<p hidden></p>`
    featureTest(html, hiddenAttributeFeature)
  })
})
