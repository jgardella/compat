let util = require('../../util.js')

const TYPE = 'Array is subclassable'

exports.type = TYPE

/**
 * Detects usage of ES6 Array subclassing.
 */
exports.func = (node, parent) => {
  if (node.type === 'ClassDeclaration' &&
     node.superClass.name === 'Array') {
    return util.createFeature(node.loc, TYPE)
  }
}
