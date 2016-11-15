let util = require('./util.js')

const TYPE = 'Reversed attribute of ordered lists'

exports.type = TYPE

/**
 * Detects usage of HTML5 ordered list reversed attribute.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['ol']) &&
      util.hasSomeAttribute(node, ['reversed'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
