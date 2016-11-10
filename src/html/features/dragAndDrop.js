let util = require('./util.js')

const TYPE = 'Drag and Drop'

exports.type = TYPE

/**
 * Detects usage of HTML5 dragable attribute.
 */
exports.func = (name, attributes) => {
  if (attributes.draggable !== undefined) {
    return util.createFeature(name, TYPE)
  }
}
