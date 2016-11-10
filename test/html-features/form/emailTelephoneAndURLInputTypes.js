/* eslint-env mocha */
let emailTelephoneAndURLInputTypesFeature = require('../../../src/html/features/form/emailTelephoneAndURLInputTypes.js')
let featureTest = require('../featureTest.js')

describe('Email, telephone, & URL input types', function () {
  it('should find email input', function () {
    let html = `<input type="email">`
    featureTest(html, emailTelephoneAndURLInputTypesFeature)
  })

  it('should find telephone input', function () {
    let html = `<input type="tel">`
    featureTest(html, emailTelephoneAndURLInputTypesFeature)
  })

  it('should find url input', function () {
    let html = `<input type="url">`
    featureTest(html, emailTelephoneAndURLInputTypesFeature)
  })
})
