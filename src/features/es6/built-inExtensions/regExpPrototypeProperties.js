let util = require('../../util.js')

const TYPE = 'RegExp.prototype properties'

exports.type = TYPE

/**
 * Detects usage of ES6 RegExp prototype property extensions.
 */
exports.func = (node, parent) => {
  // this should be broken into subfeatures
  if (node.type === 'MemberExpression' &&
      node.object.type === 'MemberExpression' &&
      node.object.object.type === 'Identifier' &&
      node.object.object.name === 'RegExp' &&
      node.object.property.name === 'prototype' &&
      (node.property.name === 'flags' ||
        (node.property.type === 'MemberExpression' &&
        node.property.object.name === 'Symbol' &&
          (node.property.property.name === 'match' ||
          node.property.property.name === 'replace' ||
          node.property.property.name === 'split' ||
          node.property.property.name === 'search')))
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
