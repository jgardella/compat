let util = require('./util.js')

const TYPE = 'Ping attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 ping attribute.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['a']) &&
      util.hasSomeAttribute(node, ['ping'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
