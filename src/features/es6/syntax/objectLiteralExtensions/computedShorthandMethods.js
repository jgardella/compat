let util = require('../../../util.js')

const TYPE = 'object literal extensions_computed shorthand methods'

exports.type = TYPE

/**
 * Detects usage of ES6 object extension for computed shorthand methods.
 */
exports.func = (node, parent) => {
  if (node.type === 'Property' &&
      node.key.type === 'Identifier' &&
      node.method &&
      node.computed &&
      node.kind === 'init') {
    return util.createFeature(node.loc, TYPE)
  }
}
