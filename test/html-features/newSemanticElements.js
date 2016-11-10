/* eslint-env mocha */
let newSemanticElementsFeature = require('../../src/html/features/newSemanticElements.js')
let featureTest = require('./featureTest.js')

describe('New semantic elements', function () {
  it('should find section element', function () {
    let html = `<section></section>`
    featureTest(html, newSemanticElementsFeature)
  })

  it('should find article element', function () {
    let html = `<article></article>`
    featureTest(html, newSemanticElementsFeature)
  })

  it('should find asdie element', function () {
    let html = `<aside></aside>`
    featureTest(html, newSemanticElementsFeature)
  })

  it('should find header element', function () {
    let html = `<header></header>`
    featureTest(html, newSemanticElementsFeature)
  })

  it('should find footer element', function () {
    let html = `<footer></footer>`
    featureTest(html, newSemanticElementsFeature)
  })

  it('should find nav element', function () {
    let html = `<nav></nav>`
    featureTest(html, newSemanticElementsFeature)
  })

  it('should find figure element', function () {
    let html = `<figure></figure>`
    featureTest(html, newSemanticElementsFeature)
  })

  it('should find figcaption element', function () {
    let html = `<figcaption></figcaption>`
    featureTest(html, newSemanticElementsFeature)
  })

  it('should find time element', function () {
    let html = `<time></time>`
    featureTest(html, newSemanticElementsFeature)
  })

  it('should find mark element', function () {
    let html = `<mark></mark>`
    featureTest(html, newSemanticElementsFeature)
  })

  it('should find main element', function () {
    let html = `<main></main>`
    featureTest(html, newSemanticElementsFeature)
  })
})
