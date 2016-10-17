let util = require('../../../util.js')

const TYPE = 'object literal extensions_shorthand properties'

exports.type = TYPE

/**
 * Detects usage of ES6 object extension for shorthand properties.
 */
exports.func = (node, parent) => {
  if (node.type === 'Property' && node.shorthand) {
    return util.createFeature(node.loc, TYPE)
  }
}
