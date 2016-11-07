let util = require('../../../util.js')

const TYPE = 'String padding_String.prototype.padStart'

exports.type = TYPE

/**
 * Detects usage of ES2017 String.prototype.padStart.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      ((node.object.type === 'Identifier' && node.object.name === 'String') ||
       (node.object.type === 'Literal' && typeof node.object.value === 'string')) &&
      node.property.type === 'Identifier' &&
      node.property.name === 'padStart'
  ) {
    return util.createFeature(node, TYPE)
  }
}
