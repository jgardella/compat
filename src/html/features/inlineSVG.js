let util = require('./util.js')

const TYPE = 'Inline SVG in HTML5'

exports.type = TYPE

/**
 * Detects usage of HTML5 inline SVGs.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['svg'])) {
    return util.createFeature(node, TYPE)
  }
}
