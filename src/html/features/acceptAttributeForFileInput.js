let util = require('./util.js')

const TYPE = 'accept attribute for file input'

exports.type = TYPE

/**
 * Detects usage of HTML5 file input accept attribute.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['input']) &&
      util.hasSomeAttribute(node, ['accept']) &&
      util.attributeIs(node, 'type', 'file')
  ) {
    return util.createFeature(node, TYPE)
  }
}
