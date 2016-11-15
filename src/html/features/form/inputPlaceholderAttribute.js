let util = require('../util.js')

const TYPE = 'input placeholder attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 input placeholder attribute.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['input']) &&
      util.hasSomeAttribute(node, ['placeholder'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
