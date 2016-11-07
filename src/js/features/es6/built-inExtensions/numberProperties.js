let util = require('../../util.js')

const TYPE = 'Number properties'

exports.type = TYPE

/**
 * Detects usage of ES6 Number property extensions.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      node.object.name === 'Number' &&
      (node.property.name === 'isFinite' ||
      node.property.name === 'isInteger' ||
      node.property.name === 'isSafeInteger' ||
      node.property.name === 'isNaN' ||
      node.property.name === 'EPSILON' ||
      node.property.name === 'MIN_SAFE_INTEGER' ||
      node.property.name === 'MAX_SAFE_INTEGER')
  ) {
    return util.createFeature(node, TYPE)
  }
}
