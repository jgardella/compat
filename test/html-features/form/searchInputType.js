/* eslint-env mocha */
let searchInputTypeFeature = require('../../../src/html/features/form/searchInputType.js')
let featureTest = require('../featureTest.js')

describe('Search input type', function () {
  it('should find search input', function () {
    let html = `<input type="search">`
    featureTest(html, searchInputTypeFeature)
  })
})
