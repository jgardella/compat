let util = require('./util.js')

const TYPE = 'Ruby annotation'

exports.type = TYPE

/**
 * Detects usage of HTML5 ruby annotation.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['ruby'])) {
    return util.createFeature(node, TYPE)
  }
}
