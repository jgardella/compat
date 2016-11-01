let util = require('../../util.js')

const TYPE = 'class extends null'

exports.type = TYPE

/**
 * Detects usage of ES2017 class extends null.
 */
exports.func = (node, parent) => {
  if (node.type === 'ClassDeclaration' &&
      node.superClass.type === 'Literal' &&
      node.superClass.value === null
  ) {
    return util.createFeature(node, TYPE)
  }
}
