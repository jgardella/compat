let util = require('../util.js')

const TYPE = 'Color input type'

exports.type = TYPE

/**
 * Detects usage of HTML5 color input type.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['input']) &&
      util.attributeIs(node, 'type', 'color')
  ) {
    return util.createFeature(node, TYPE)
  }
}
