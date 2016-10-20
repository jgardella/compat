let util = require('../../../util.js')

const TYPE = 'miscellaneous subclassables_String is subclassable'

exports.type = TYPE

/**
 * Detects usage of ES6 String subclassing.
 */
exports.func = (node, parent) => {
  if (node.type === 'ClassDeclaration' &&
     node.superClass.name === 'String') {
    return util.createFeature(node, TYPE)
  }
}
