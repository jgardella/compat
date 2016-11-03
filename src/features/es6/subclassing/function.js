let util = require('../../util.js')

const TYPE = 'Function is subclassable'

exports.type = TYPE

/**
 * Detects usage of ES6 Function subclassing.
 */
exports.func = (node, parent) => {
  if (node.type === 'ClassDeclaration' &&
     node.superClass !== null &&
     node.superClass.name === 'Function') {
    return util.createFeature(node, TYPE)
  }
}
