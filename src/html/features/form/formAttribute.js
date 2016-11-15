let util = require('../util.js')

const TYPE = 'Form attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 form attribute on inputs.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, [
    'button',
    'fieldset',
    'input',
    'keygen',
    'object',
    'output',
    'select',
    'textarea'
  ]) &&
      util.hasSomeAttribute(node, ['form'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
