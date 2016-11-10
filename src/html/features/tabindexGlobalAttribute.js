let util = require('./util.js')

const TYPE = 'tabindex global attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 tabindex global attribute.
 */
exports.func = (name, attributes) => {
  if (attributes.tabindex !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
