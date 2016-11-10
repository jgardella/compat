/* eslint-env mocha */
let attributesForFormSubmissionFeature = require('../../src/html/features/attributesForFormSubmission.js')
let featureTest = require('./featureTest.js')

describe('Attributes for form submission', function () {
  it('should find form using action attribute', function () {
    let html = `<form action="/search.cgi"></form>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find form using enctype attribute', function () {
    let html = `<form enctype="text/plain"></form>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find form using method attribute', function () {
    let html = `<form method=dialog></form>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find form using novalidate attribute', function () {
    let html = `<form novalidate></form>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find form using target  attribute', function () {
    let html = `<form target="_blank"></form>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find form using enctype attribute', function () {
    let html = `<form enctype="text/plain"></form>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find form using enctype attribute', function () {
    let html = `<form enctype="text/plain"></form>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find button using formaction attribute', function () {
    let html = `<button formaction="/search.cgi"></button>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find button using formenctype attribute', function () {
    let html = `<button formenctype="text/plain"></button>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find button using formmethod attribute', function () {
    let html = `<button formmethod=dialog></button>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find button using formnovalidate attribute', function () {
    let html = `<button formnovalidate></button>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find button using formtarget attribute', function () {
    let html = `<button formtarget="_blank"></button>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find input using form attribute', function () {
    let html = `<input type=submit formenctype="text/plain">`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find keygen using form attribute', function () {
    let html = `<keygen formenctype="text/plain">`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find object using form attribute', function () {
    let html = `<object formenctype="text/plain"></object>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find select using form attribute', function () {
    let html = `<select formenctype="text/plain"></select>`
    featureTest(html, attributesForFormSubmissionFeature)
  })

  it('should find textarea using form attribute', function () {
    let html = `<textarea formenctype="text/plain"></teextarea>`
    featureTest(html, attributesForFormSubmissionFeature)
  })
})
