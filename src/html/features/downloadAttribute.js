let util = require('./util.js')

const TYPE = 'Download attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 download attribute.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['a']) &&
      util.hasSomeAttribute(node, ['download'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
