let util = require('../../util.js')

const TYPE = 'Pattern attribute for input fields'

exports.type = TYPE

/**
 * Detects usage of HTML5 input field pattern attribute.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['input']) &&
      util.hasSomeAttribute(node, ['pattern'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
