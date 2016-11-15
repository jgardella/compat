let util = require('../util.js')

const TYPE = 'Progress element'

exports.type = TYPE

/**
 * Detects usage of HTML5 progress element.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['progress'])) {
    return util.createFeature(node, TYPE)
  }
}
