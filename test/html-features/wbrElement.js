/* eslint-env mocha */
let wbrElementFeature = require('../../src/html/features/wbrElement.js')
let featureTest = require('./featureTest.js')

describe('wbr (word break opportunity) element', function () {
  it('should find wbr element', function () {
    let html = `The quick brown fox<wbr>jumped over the lazy dog.`
    featureTest(html, wbrElementFeature)
  })
})
