let util = require('./util.js')

const TYPE = 'Download attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 download attribute.
 */
exports.func = (name, attributes) => {
  if (name === 'a' &&
      attributes.download !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
