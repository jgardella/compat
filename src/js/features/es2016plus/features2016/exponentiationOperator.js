let util = require('../../util.js')

const TYPE = 'exponentiation (**) operator'

exports.type = TYPE

/**
 * Detects usage of ES2016 exponentiation operator.
 */
exports.func = (node, parent) => {
  if ((node.type === 'BinaryExpression' && node.operator === '**') ||
     (node.type === 'AssignmentExpression' && node.operator === '**=')
  ) {
    return util.createFeature(node, TYPE)
  }
}
