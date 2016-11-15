let util = require('./util.js')

const TYPE = 'srcset attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 img srcset attribute.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['img']) &&
      util.hasSomeAttribute(node, ['srcset'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
