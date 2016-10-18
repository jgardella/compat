let util = require('../../util.js')

const TYPE = 'WeakSet'

exports.type = TYPE

/**
 * Detects usage of ES6 WeakSet built-in.
 */
exports.func = (node, parent) => {
  if (node.type === 'NewExpression' &&
      node.callee.name === 'WeakSet'
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
