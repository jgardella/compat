let util = require('./util.js')

const TYPE = 'autofocus attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 autofocus attribute.
 */
exports.func = (name, attributes) => {
  if (attributes.autofocus !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
