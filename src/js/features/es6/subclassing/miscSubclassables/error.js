let util = require('../../../util.js')

const TYPE = 'miscellaneous subclassables_Error is subclassable'

exports.type = TYPE

/**
 * Detects usage of ES6 Error subclassing.
 */
exports.func = (node, parent) => {
  if (node.type === 'ClassDeclaration' &&
     node.superClass !== null &&
     node.superClass.name === 'Error') {
    return util.createFeature(node, TYPE)
  }
}
