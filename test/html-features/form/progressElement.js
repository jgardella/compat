/* eslint-env mocha */
let progressElementFeature = require('../../../src/html/features/form/progressElement.js')
let featureTest = require('../featureTest.js')

describe('Progress element', function () {
  it('should find progress element', function () {
    let html = `<progress max=100></progress>`
    featureTest(html, progressElementFeature)
  })
})
