let util = require('../../util.js')

const TYPE = 'Date.prototype[Symbol.toPrimitive]'

exports.type = TYPE

/**
 * Detects usage of ES6 Date.prototype[Symbol.toPrimitive] extension.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      node.object.type === 'MemberExpression' &&
      node.object.object.type === 'Identifier' &&
      node.object.object.name === 'Date' &&
      node.object.property.name === 'prototype' &&
      node.property.type === 'MemberExpression' &&
      node.property.object.name === 'Symbol' &&
      node.property.property.name === 'toPrimitive'
  ) {
    return util.createFeature(node, TYPE)
  }
}
