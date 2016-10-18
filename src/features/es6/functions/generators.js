let util = require('../../util.js')

const TYPE = 'generators'

exports.type = TYPE

/**
 * Detects usage of ES6 generators.
 */
exports.func = (node, parent) => {
  if (node.type === 'FunctionDeclaration' &&
      node.generator === true
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
