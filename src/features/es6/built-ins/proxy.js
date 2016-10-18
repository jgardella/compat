let util = require('../../util.js')

const TYPE = 'Proxy'

exports.type = TYPE

/**
 * Detects usage of ES6 Proxy built-in.
 */
exports.func = (node, parent) => {
  if (node.type === 'NewExpression' &&
      node.callee.name === 'Proxy'
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
