let util = require('./util.js')

const TYPE = 'Audio element'

exports.type = TYPE

/**
 * Detects usage of HTML5 audio element.
 */
exports.func = (name, attributes) => {
  if (name === 'audio') {
    return util.createFeature(name, TYPE)
  }
}
