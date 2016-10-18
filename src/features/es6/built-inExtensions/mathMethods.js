let util = require('../../util.js')

const TYPE = 'Math methods'

exports.type = TYPE

/**
 * Detects usage of ES6 Math method extensions.
 */
exports.func = (node, parent) => {
  if (node.type === 'MemberExpression' &&
      node.object.name === 'Math' &&
      (node.property.name === 'clz32' ||
      node.property.name === 'imul' ||
      node.property.name === 'sign' ||
      node.property.name === 'log10' ||
      node.property.name === 'log2' ||
      node.property.name === 'log1p' ||
      node.property.name === 'expm1' ||
      node.property.name === 'cosh' ||
      node.property.name === 'sinh' ||
      node.property.name === 'tanh' ||
      node.property.name === 'acosh' ||
      node.property.name === 'asinh' ||
      node.property.name === 'atanh' ||
      node.property.name === 'trunc' ||
      node.property.name === 'fround' ||
      node.property.name === 'cbrt' ||
      node.property.name === 'hypot')
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
