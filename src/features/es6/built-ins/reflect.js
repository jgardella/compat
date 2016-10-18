let util = require('../../util.js')

const TYPE = 'Reflect'

exports.type = TYPE

/**
 * Detects usage of ES6 Reflect built-in.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      node.object.type === 'Identifier' &&
      node.object.name === 'Reflect'
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
