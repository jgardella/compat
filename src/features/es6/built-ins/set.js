let util = require('../../util.js')

const TYPE = 'Set'

exports.type = TYPE

/**
 * Detects usage of ES6 Set built-in.
 */
exports.func = (node, parent) => {
  if (node.type === 'NewExpression' &&
      node.callee.name === 'Set'
  ) {
    return util.createFeature(node, TYPE)
  }
}
