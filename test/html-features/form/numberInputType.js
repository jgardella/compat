/* eslint-env mocha */
let numberInputTypeFeature = require('../../../src/html/features/form/numberInputType.js')
let featureTest = require('../featureTest.js')

describe('Number input type', function () {
  it('should find number input', function () {
    let html = `<input type="number">`
    featureTest(html, numberInputTypeFeature)
  })
})
