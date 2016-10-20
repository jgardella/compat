let util = require('../../util.js')

const TYPE = 'template literals'

exports.type = TYPE

/**
 * Detects usage of ES6 template literals.
 */
exports.func = (node, parent) => {
  if (node.type === 'TemplateLiteral') {
    return util.createFeature(node, TYPE)
  }
}
