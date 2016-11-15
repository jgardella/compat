let util = require('./util.js')

const TYPE = 'Details & Summary elements'

exports.type = TYPE

/**
 * Detects usage of HTML5 details and summary elements.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['details', 'summary'])) {
    return util.createFeature(node, TYPE)
  }
}
