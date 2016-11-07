let util = require('../../util.js')

const TYPE = 'Array static methods'

exports.type = TYPE

/**
 * Detects usage of ES6 Array static method extensions.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      node.object.name === 'Array' &&
      (node.property.name === 'from' ||
      node.property.name === 'of')
  ) {
    return util.createFeature(node, TYPE)
  }
}
