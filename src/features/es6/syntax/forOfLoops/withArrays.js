let util = require('../../../util.js')

const TYPE = 'for..of loops_with arrays'

exports.type = TYPE

/**
 * Detects usage of ES6 for..of loop with arrays.
 */
exports.func = (node, parent) => {
  if (node.type === 'ForOfStatement' &&
      node.right.type === 'ArrayExpression') {
    return util.createFeature(node.loc, TYPE)
  }
}
