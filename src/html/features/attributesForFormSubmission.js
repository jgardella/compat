let util = require('./util.js')

const TYPE = 'Attributes for form submission'

exports.type = TYPE

/**
 * Detects usage of HTML5 form submission node.attribs.
 */
exports.func = (node) => {
  if ((util.hasSomeName(node, ['form']) &&
      util.hasSomeAttribute(node, [
        'action', 'enctype', 'method', 'novalidate', 'target'
      ])) || (
      util.hasSomeName(node, [
        'button', 'input', 'keygen', 'object', 'select', 'textarea'
      ]) &&
      util.hasSomeAttribute(node, [
        'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget'
      ]))
  ) {
    return util.createFeature(node, TYPE)
  }
}
