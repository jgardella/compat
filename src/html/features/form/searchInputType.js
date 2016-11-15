let util = require('../util.js')

const TYPE = 'Search input type'

exports.type = TYPE

/**
 * Detects usage of HTML5 search input type.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['input']) &&
      util.attributeIs(node, 'type', 'search')
  ) {
    return util.createFeature(node, TYPE)
  }
}
