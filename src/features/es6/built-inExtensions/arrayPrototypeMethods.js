let util = require('../../util.js')

const TYPE = 'Array.prototype methods'

exports.type = TYPE

/**
 * Detects usage of ES6 Array prototype method extensions.
 */
exports.func = (node, parent) => {
  // this should be broken into subfeatures
  if (node.type === 'MemberExpression' &&
      node.object.type === 'MemberExpression' &&
      node.object.object.type === 'Identifier' &&
      node.object.object.name === 'Array' &&
      node.object.property.name === 'prototype' &&
      (node.property.name === 'copyWithin' ||
      node.property.name === 'find' ||
      node.property.name === 'findIndex' ||
      node.property.name === 'fill' ||
      node.property.name === 'keys' ||
      node.property.name === 'values' ||
      node.property.name === 'entries')
  ) {
    return util.createFeature(node, TYPE)
  }
}
