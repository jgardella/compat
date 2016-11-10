/* eslint-env mocha */
let rangeInputTypeFeature = require('../../../src/html/features/form/rangeInputType.js')
let featureTest = require('../featureTest.js')

describe('Range input type', function () {
  it('should find range input', function () {
    let html = `<input type="range">`
    featureTest(html, rangeInputTypeFeature)
  })
})
