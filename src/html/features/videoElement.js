let util = require('./util.js')

const TYPE = 'Video element'

exports.type = TYPE

/**
 * Detects usage of HTML5 video element.
 */
exports.func = (name, attributes) => {
  if (name === 'video') {
    return util.createFeature(name, TYPE)
  }
}
