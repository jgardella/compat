let util = require('../util.js')

const TYPE = 'Range input type'

exports.type = TYPE

/**
 * Detects usage of HTML5 range input type.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['input']) && (
      util.attributeIs(node, 'type', 'date') ||
      util.attributeIs(node, 'type', 'month') ||
      util.attributeIs(node, 'type', 'week') ||
      util.attributeIs(node, 'type', 'time') ||
      util.attributeIs(node, 'type', 'datetime-local'))
  ) {
    return util.createFeature(node, TYPE)
  }
}
