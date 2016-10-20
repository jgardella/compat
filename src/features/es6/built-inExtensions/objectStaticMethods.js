let util = require('../../util.js')

const TYPE = 'Object static methods'

exports.type = TYPE

/**
 * Detects usage of ES6 Object static method extensions.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      node.object.name === 'Object' &&
      (node.property.name === 'assign' ||
      node.property.name === 'is' ||
      node.property.name === 'getOwnPropertySymbols' ||
      node.property.name === 'setPrototypeOf')
  ) {
    return util.createFeature(node, TYPE)
  }
}
