let util = require('./util.js')

const TYPE = 'srcdoc attribute for iframes'

exports.type = TYPE

/**
 * Detects usage of HTML5 iframe srcdoc attribute.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['iframe']) &&
      util.hasSomeAttribute(node, ['srcdoc'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
