let util = require('../../util.js')

const TYPE = 'maxlength attribute for input and textarea elements'

exports.type = TYPE

/**
 * Detects usage of HTML5 input/textarea maxlength attribute.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['input', 'textarea']) &&
      util.hasSomeAttribute(node, ['maxlength'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
