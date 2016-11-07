let util = require('../../util.js')

const TYPE = 'super'

exports.type = TYPE

/**
 * Detects usage of ES6 super function.
 */
exports.func = (node, parent) => {
  if (node.type === 'Super') {
    return util.createFeature(node, TYPE)
  }
}
