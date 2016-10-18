let util = require('../../util.js')

const TYPE = 'Promise'

exports.type = TYPE

/**
 * Detects usage of ES6 Promise built-in.
 */
exports.func = (node, parent) => {
  if (node.type === 'NewExpression' &&
      node.callee.name === 'Promise'
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
