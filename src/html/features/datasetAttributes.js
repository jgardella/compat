let util = require('./util.js')

const TYPE = 'dataset & data-* attributes'

exports.type = TYPE

/**
 * Detects usage of HTML5 data-* attributes.
 */
exports.func = (name, attributes) => {
  if (Object.keys(attributes).some((attribute) => attribute.startsWith('data-'))) {
    return util.createFeature(name, TYPE)
  }
}
