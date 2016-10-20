let util = require('../../../util.js')

const TYPE = 'miscellaneous subclassables_Set is subclassable'

exports.type = TYPE

/**
 * Detects usage of ES6 Set subclassing.
 */
exports.func = (node, parent) => {
  if (node.type === 'ClassDeclaration' &&
     node.superClass.name === 'Set') {
    return util.createFeature(node, TYPE)
  }
}
