let util = require('../../../util.js')

const TYPE = 'object literal extensions_computed properties'

exports.type = TYPE

/**
 * Detects usage of ES6 object extension for computed properties.
 */
exports.func = (node, parent) => {
  if (node.type === 'Property' && node.computed) {
    return util.createFeature(node.loc, TYPE)
  }
}
