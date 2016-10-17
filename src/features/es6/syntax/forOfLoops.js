let util = require('../../util.js')

const TYPE = 'for..of loops'

exports.type = TYPE

/**
 * Detects usage of ES6 for..of loop.
 */
exports.func = (node, parent) => {
  if (node.type === 'ForOfStatement') {
    return util.createFeature(node.loc, TYPE)
  }
}
