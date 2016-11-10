let util = require('./util.js')

const TYPE = 'SVG Favicons'

exports.type = TYPE

/**
 * Detects usage of HTML5 SVG favicons.
 */
exports.func = (name, attributes) => {
  if (name === 'link' &&
      attributes.rel === 'icon' &&
      attributes.sizes === 'any' &&
      attributes.type === 'image/svg+xml'
  ) {
    return util.createFeature(name, TYPE)
  }
}
