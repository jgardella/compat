/* eslint-env mocha */
let tabindexGlobalAttributeFeature = require('../../src/html/features/tabindexGlobalAttribute.js')
let featureTest = require('./featureTest.js')

describe('tabindex global attribute', function () {
  it('should find tabindex attribute', function () {
    let html = `<p tabindex=1></p>`
    featureTest(html, tabindexGlobalAttributeFeature)
  })
})
