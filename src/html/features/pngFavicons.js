let util = require('./util.js')

const TYPE = 'PNG Favicons'

exports.type = TYPE

/**
 * Detects usage of HTML5 PNG favicons.
 */
exports.func = (name, attributes) => {
  if (name === 'link' &&
      attributes.rel === 'icon' &&
      attributes.type === 'image/png'
  ) {
    return util.createFeature(name, TYPE)
  }
}
