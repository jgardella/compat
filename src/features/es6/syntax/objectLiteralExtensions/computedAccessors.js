let util = require('../../../util.js')

const TYPE = 'object literal extensions_computed accessors'

exports.type = TYPE

/**
 * Detects usage of ES6 object extension for computed accessors.
 */
exports.func = (node, parent) => {
  if (node.type === 'Property' &&
      node.computed &&
      (node.kind === 'get' || node.kind === 'set')) {
    return util.createFeature(node.loc, TYPE)
  }
}
