let util = require('./util.js')

const TYPE = 'autofocus attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 autofocus attribute.
 */
exports.func = (node) => {
  if (util.hasSomeAttribute(node, ['autofocus'])) {
    return util.createFeature(node, TYPE)
  }
}
