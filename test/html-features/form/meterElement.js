/* eslint-env mocha */
let meterElementFeature = require('../../../src/html/features/form/meterElement.js')
let featureTest = require('../featureTest.js')

describe('Meter element', function () {
  it('should find meter element', function () {
    let html = `<meter value="0.5"></meter>`
    featureTest(html, meterElementFeature)
  })
})
