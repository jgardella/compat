let util = require('../../util.js')

const TYPE = 'class'

exports.type = TYPE

/**
 * Detects usage of ES6 classes.
 */
exports.func = (node, parent) => {
  if (node.type === 'ClassDeclaration' ||
      node.type === 'ClassExpression'
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
