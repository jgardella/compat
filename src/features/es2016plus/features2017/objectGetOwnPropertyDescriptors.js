let util = require('../../util.js')

const TYPE = 'Object.getOwnPropertyDescriptors'

exports.type = TYPE

/**
 * Detects usage of ES2017 Object.getOwnPropertyDescriptors.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      node.object.type === 'Identifier' &&
      node.object.name === 'Object' &&
      node.property.type === 'Identifier' &&
      node.property.name === 'getOwnPropertyDescriptors'
  ) {
    return util.createFeature(node, TYPE)
  }
}
