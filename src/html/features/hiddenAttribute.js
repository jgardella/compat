let util = require('./util.js')

const TYPE = 'hidden attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 hidden attribute.
 */
exports.func = (node) => {
  if (util.hasSomeAttribute(node, ['hidden'])) {
    return util.createFeature(node, TYPE)
  }
}
