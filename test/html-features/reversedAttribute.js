/* eslint-env mocha */
let reversedAttributeFeature = require('../../src/html/features/reversedAttribute.js')
let featureTest = require('./featureTest.js')

describe('Reversed attribute for ordered lists', function () {
  it('should find reversed attribute on ordered list', function () {
    let html = `<ol reversed></ol>`
    featureTest(html, reversedAttributeFeature)
  })
})
