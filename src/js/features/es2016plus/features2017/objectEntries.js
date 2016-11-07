let util = require('../../util.js')

const TYPE = 'Object.entries'

exports.type = TYPE

/**
 * Detects usage of ES2017 Object.entries.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      node.object.type === 'Identifier' &&
      node.object.name === 'Object' &&
      node.property.type === 'Identifier' &&
      node.property.name === 'entries'
  ) {
    return util.createFeature(node, TYPE)
  }
}
