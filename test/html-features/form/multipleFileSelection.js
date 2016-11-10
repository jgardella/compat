/* eslint-env mocha */
let multipleFileSelectionFeature = require('../../../src/html/features/form/multipleFileSelection.js')
let featureTest = require('../featureTest.js')

describe('Multiple file selection', function () {
  it('should find input multiple attribute', function () {
    let html = `<input multiple>`
    featureTest(html, multipleFileSelectionFeature)
  })
})
