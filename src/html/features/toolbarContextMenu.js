let util = require('./util.js')

const TYPE = 'Toolbar/context menu'

exports.type = TYPE

/**
 * Detects usage of HTML5 menu element.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['menu'])) {
    return util.createFeature(node, TYPE)
  }
}
