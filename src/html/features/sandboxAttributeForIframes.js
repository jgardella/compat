let util = require('./util.js')

const TYPE = 'sandbox attribute for iframes'

exports.type = TYPE

/**
 * Detects usage of HTML5 iframe sandbox attribute.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['iframe']) &&
      util.hasSomeAttribute(node, ['sandbox'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
