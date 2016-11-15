let util = require('./util.js')

const TYPE = 'Drag and Drop'

exports.type = TYPE

/**
 * Detects usage of HTML5 dragable attribute.
 */
exports.func = (node) => {
  if (util.hasSomeAttribute(node, ['draggable'])) {
    return util.createFeature(node, TYPE)
  }
}
