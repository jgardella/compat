let util = require('./util.js')

const TYPE = 'wbr (word break opportunity) element'

exports.type = TYPE

/**
 * Detects usage of HTML5 wbr element.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['wbr'])) {
    return util.createFeature(node, TYPE)
  }
}
