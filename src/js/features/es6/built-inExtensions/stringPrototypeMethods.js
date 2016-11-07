let util = require('../../util.js')

const TYPE = 'String.prototype methods'

exports.type = TYPE

/**
 * Detects usage of ES6 String prototype method extensions.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      node.object.type === 'MemberExpression' &&
      node.object.object.type === 'Identifier' &&
      node.object.object.name === 'String' &&
      node.object.property.name === 'prototype' &&
      (node.property.name === 'codePointAt' ||
      node.property.name === 'normalize' ||
      node.property.name === 'repeat' ||
      node.property.name === 'startsWith' ||
      node.property.name === 'endsWith' ||
      node.property.name === 'includes')
  ) {
    return util.createFeature(node, TYPE)
  }
}
