let util = require('../../../util.js')

const TYPE = 'octal and binary literals_binary literals'

exports.type = TYPE

/**
 * Detects usage of ES6 binary literals.
 */
exports.func = (node, parent) => {
  if (node.type === 'Literal' &&
      typeof node.value === 'number' &&
      node.raw.toLowerCase().indexOf('b') > -1
  ) {
    return util.createFeature(node, TYPE)
  }
}
