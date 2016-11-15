let util = require('./util.js')

const TYPE = 'PNG Favicons'

exports.type = TYPE

/**
 * Detects usage of HTML5 PNG favicons.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['link']) &&
      util.attributeIs(node, 'rel', 'icon') &&
      util.attributeIs(node, 'type', 'image/png')
  ) {
    return util.createFeature(node, TYPE)
  }
}
