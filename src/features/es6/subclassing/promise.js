let util = require('../../util.js')

const TYPE = 'Promise is subclassable'

exports.type = TYPE

/**
 * Detects usage of ES6 Promise subclassing.
 */
exports.func = (node, parent) => {
  if (node.type === 'ClassDeclaration' &&
     node.superClass.name === 'Promise') {
    return util.createFeature(node.loc, TYPE)
  }
}
