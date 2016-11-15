let util = require('../util.js')

const TYPE = 'Range input type'

exports.type = TYPE

/**
 * Detects usage of HTML5 range input type.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['input']) &&
      util.attributeIs(node, 'type', 'range')
  ) {
    return util.createFeature(node, TYPE)
  }
}
