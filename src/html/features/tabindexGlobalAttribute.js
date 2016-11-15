let util = require('./util.js')

const TYPE = 'tabindex global attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 tabindex global attribute.
 */
exports.func = (node) => {
  if (util.hasSomeAttribute(node, ['tabindex'])) {
    return util.createFeature(node, TYPE)
  }
}
