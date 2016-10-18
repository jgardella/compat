let util = require('../../util.js')

const TYPE = 'Map'

exports.type = TYPE

/**
 * Detects usage of ES6 Map built-in.
 */
exports.func = (node, parent) => {
  if (node.type === 'NewExpression' &&
      node.callee.name === 'Map'
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
