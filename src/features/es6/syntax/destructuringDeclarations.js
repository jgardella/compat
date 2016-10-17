let util = require('../../util.js')

const TYPE = 'destructuring, declarations'

exports.type = TYPE

/**
 * Detects usage of ES6 destructuring in declarations.
 */
exports.func = (node, parent) => {
  if (node.type === 'VariableDeclarator' &&
      (node.id.type === 'ArrayPattern' || node.id.type === 'ObjectPattern')
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
