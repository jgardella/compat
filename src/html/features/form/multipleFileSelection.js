let util = require('../util.js')

const TYPE = 'Multiple file selection'

exports.type = TYPE

/**
 * Detects usage of HTML5 multiple file selection.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['input']) &&
      util.hasSomeAttribute(node, ['multiple'])
  ) {
    return util.createFeature(node, TYPE)
  }
}
