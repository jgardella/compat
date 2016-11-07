let util = require('../../util.js')

const TYPE = 'arrow functions'

exports.type = TYPE

/**
 * Detects usage of ES6 arrow functions.
 */
exports.func = (node, parent) => {
  if (node.type === 'ArrowFunctionExpression') {
    return util.createFeature(node, TYPE)
  }
}
