let util = require('../../util.js')

const TYPE = 'WeakMap'

exports.type = TYPE

/**
 * Detects usage of ES6 WeakMap built-in.
 */
exports.func = (node, parent) => {
  if (node.type === 'NewExpression' &&
      node.callee.name === 'WeakMap'
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
