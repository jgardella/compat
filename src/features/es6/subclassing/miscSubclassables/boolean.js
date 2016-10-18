let util = require('../../../util.js')

const TYPE = 'miscellaneous subclassables_Boolean is subclassable'

exports.type = TYPE

/**
 * Detects usage of ES6 Boolean subclassing.
 */
exports.func = (node, parent) => {
  if (node.type === 'ClassDeclaration' &&
     node.superClass.name === 'Boolean') {
    return util.createFeature(node.loc, TYPE)
  }
}
