/* eslint-env mocha */
let detailsAndSummaryElementsFeature = require('../../src/html/features/detailsAndSummaryElements.js')
let featureTest = require('./featureTest.js')

describe('Details & Summary elements', function () {
  it('should find details and summary elements', function () {
    let html = `
      <details>
        <summary>foo</summary>
        <p>bar</p>
      </details>
      `
    featureTest(html, detailsAndSummaryElementsFeature)
  })
})
