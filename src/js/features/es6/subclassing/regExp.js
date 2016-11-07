let util = require('../../util.js')

const TYPE = 'RegExp is subclassable'

exports.type = TYPE

/**
 * Detects usage of ES6 RegExp subclassing.
 */
exports.func = (node, parent) => {
  if (node.type === 'ClassDeclaration' &&
     node.superClass !== null &&
     node.superClass.name === 'RegExp') {
    return util.createFeature(node, TYPE)
  }
}
