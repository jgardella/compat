let util = require('./util.js')

const TYPE = 'Audio element'

exports.type = TYPE

/**
 * Detects usage of HTML5 audio element.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['audio'])) {
    return util.createFeature(node, TYPE)
  }
}
