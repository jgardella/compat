let util = require('../../util.js')

const TYPE = 'destructuring, parameters'

exports.type = TYPE

/**
 * Detects usage of ES6 destructuring in parameters.
 */
exports.func = (node, parent) => {
  if ((node.type === 'FunctionDeclaration' || node.type === 'ArrowFunctionExpression') &&
      node.params.some((param) => {
        return param.type === 'ArrayPattern' || param.type === 'ObjectPattern'
      })
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
