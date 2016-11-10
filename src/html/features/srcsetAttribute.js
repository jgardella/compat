let util = require('./util.js')

const TYPE = 'srcset attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 img srcset attribute.
 */
exports.func = (name, attributes) => {
  if (name === 'img' &&
      attributes.srcset !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
