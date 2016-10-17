let util = require('../../../util.js')

const TYPE = 'object literal extensions_string keyed shorthand methods'

exports.type = TYPE

/**
 * Detects usage of ES6 object extension for shorthand methods with string key.
 */
exports.func = (node, parent) => {
  if (node.type === 'Property' &&
      node.key.type === 'Literal' &&
      node.method &&
      node.kind === 'init') {
    return util.createFeature(node.loc, TYPE)
  }
}
