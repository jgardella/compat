let util = require('../../util.js')

const TYPE = 'Minimum length attribute for input fields'

exports.type = TYPE

/**
 * Detects usage of HTML5 input field minimum length attribute.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['input']) &&
      util.hasSomeAttribute(node, ['minlength'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
