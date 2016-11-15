let util = require('./util.js')

const TYPE = 'SVG Favicons'

exports.type = TYPE

/**
 * Detects usage of HTML5 SVG favicons.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['link']) &&
      util.attributeIs(node, 'rel', 'icon') &&
      util.attributeIs(node, 'sizes', 'any') &&
      util.attributeIs(node, 'type', 'image/svg+xml')
  ) {
    return util.createFeature(node, TYPE)
  }
}
