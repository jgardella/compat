let util = require('../../util.js')

const TYPE = 'destructuring, assignment'

exports.type = TYPE

/**
 * Detects usage of ES6 destructuring in assignment.
 */
exports.func = (node, parent) => {
  if (node.type === 'AssignmentExpression' &&
      (node.left.type === 'ArrayPattern' || node.left.type === 'ObjectPattern')
  ) {
    return util.createFeature(node, TYPE)
  }
}
