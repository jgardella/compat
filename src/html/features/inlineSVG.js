let util = require('./util.js')

const TYPE = 'Inline SVG in HTML5'

exports.type = TYPE

/**
 * Detects usage of HTML5 inline SVGs.
 */
exports.func = (name, attributes) => {
  if (name === 'svg') {
    return util.createFeature(name, TYPE)
  }
}
