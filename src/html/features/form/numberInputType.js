let util = require('../util.js')

const TYPE = 'Number input type'

exports.type = TYPE

/**
 * Detects usage of HTML5 number input type.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['input']) &&
      util.attributeIs(node, 'type', 'number')
  ) {
    return util.createFeature(node, TYPE)
  }
}
