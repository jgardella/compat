let util = require('../../util.js')

const TYPE = 'let'

exports.type = TYPE

/**
 * Detects usage of ES6 let keyword.
 */
exports.func = (node, parent) => {
  if (node.type === 'VariableDeclaration' && node.kind === 'let') {
    return util.createFeature(node.loc, TYPE)
  }
}
