let util = require('../../util.js')

const TYPE = 'Symbol'

exports.type = TYPE

/**
 * Detects usage of ES6 Symbol built-in.
 */
exports.func = (node, parent) => {
  if (node.type === 'CallExpression' &&
      node.callee.name === 'Symbol'
  ) {
    return util.createFeature(node, TYPE)
  }
}
