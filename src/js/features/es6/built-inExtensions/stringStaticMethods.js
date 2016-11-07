let util = require('../../util.js')

const TYPE = 'String static methods'

exports.type = TYPE

/**
 * Detects usage of ES6 String static method extensions.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      node.object.name === 'String' &&
      (node.property.name === 'raw' ||
      node.property.name === 'fromCodePoint')
  ) {
    return util.createFeature(node, TYPE)
  }
}
