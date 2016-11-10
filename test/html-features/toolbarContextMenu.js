/* eslint-env mocha */
let toolbarContextMenuFeature = require('../../src/html/features/toolbarContextMenu.js')
let featureTest = require('./featureTest.js')

describe('Toolbar/context menu', function () {
  it('should find menu element', function () {
    let html = `<menu type="context"></menu>`
    featureTest(html, toolbarContextMenuFeature)
  })
})
