let util = require('../../../util.js')

const TYPE = 'miscellaneous subclassables_Map is subclassable'

exports.type = TYPE

/**
 * Detects usage of ES6 Map subclassing.
 */
exports.func = (node, parent) => {
  if (node.type === 'ClassDeclaration' &&
     node.superClass.name === 'Map') {
    return util.createFeature(node, TYPE)
  }
}
