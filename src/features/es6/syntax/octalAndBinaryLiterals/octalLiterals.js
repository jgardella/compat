let util = require('../../../util.js')

const TYPE = 'octal and binary literals_octal literals'

exports.type = TYPE

/**
 * Detects usage of ES6 octal literals.
 */
exports.func = (node, parent) => {
  if (node.type === 'Literal' &&
      typeof node.value === 'number' &&
      node.raw.toLowerCase().indexOf('o') > -1
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
