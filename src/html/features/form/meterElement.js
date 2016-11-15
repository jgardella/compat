let util = require('../util.js')

const TYPE = 'Meter element'

exports.type = TYPE

/**
 * Detects usage of HTML5 meter element.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['meter'])) {
    return util.createFeature(node, TYPE)
  }
}
