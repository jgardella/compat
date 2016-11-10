let util = require('./util.js')

const TYPE = 'hidden attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 hidden attribute.
 */
exports.func = (name, attributes) => {
  if (attributes.hidden !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
