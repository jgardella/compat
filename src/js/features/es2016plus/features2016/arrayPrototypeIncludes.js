let util = require('../../util.js')

const TYPE = 'Array.prototype.includes'

exports.type = TYPE

/**
 * Detects usage of ES2016 Array.prototype.includes.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      node.object.type === 'ArrayExpression' &&
      node.property.type === 'Identifier' &&
      node.property.name === 'includes'
  ) {
    return util.createFeature(node, TYPE)
  }
}
