let util = require('./util.js')

const TYPE = 'Spellcheck attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 textarea/input spellcheck attribute.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['textarea', 'input']) &&
      util.hasSomeAttribute(node, ['spellcheck'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
