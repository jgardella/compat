let util = require('../../../util.js')

const TYPE = 'String.prototype.padEnd'

exports.type = TYPE

/**
 * Detects usage of ES2017 String.prototype.padEnd.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      ((node.object.type === 'Identifier' && node.object.name === 'String') ||
       (node.object.type === 'Literal' && typeof node.object.value === 'string')) &&
      node.property.type === 'Identifier' &&
      node.property.name === 'padEnd'
  ) {
    return util.createFeature(node, TYPE)
  }
}
