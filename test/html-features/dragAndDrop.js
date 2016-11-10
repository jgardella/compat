/* eslint-env mocha */
let dragAndDropFeature = require('../../src/html/features/dragAndDrop.js')
let featureTest = require('./featureTest.js')

describe('Drag and Drop', function () {
  it('should find draggable attribute', function () {
    let html = `<p draggable="true">foo</p>`
    featureTest(html, dragAndDropFeature)
  })
})
