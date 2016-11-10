/* eslint-env mocha */
let formAttributeFeature = require('../../../src/html/features/form/formAttribute.js')
let featureTest = require('../featureTest.js')

describe('Form attribute', function () {
  it('should find form attribute on button', function () {
    let html = `<button form="a"></button>`
    featureTest(html, formAttributeFeature)
  })

  it('should find form attribute on fieldset', function () {
    let html = `<fieldset form="a">`
    featureTest(html, formAttributeFeature)
  })

  it('should find form attribute on input', function () {
    let html = `<input form="a">`
    featureTest(html, formAttributeFeature)
  })

  it('should find form attribute on keygen', function () {
    let html = `<keygen form="a">`
    featureTest(html, formAttributeFeature)
  })

  it('should find form attribute on object', function () {
    let html = `<object form="a"></object>`
    featureTest(html, formAttributeFeature)
  })

  it('should find form attribute on output', function () {
    let html = `<output form="a"></output>`
    featureTest(html, formAttributeFeature)
  })

  it('should find form attribute on select', function () {
    let html = `<select form="a"></select>`
    featureTest(html, formAttributeFeature)
  })

  it('should find form attribute on textarea', function () {
    let html = `<textarea form="a"></textarea>`
    featureTest(html, formAttributeFeature)
  })
})
