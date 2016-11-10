let util = require('./util.js')

const TYPE = 'Ruby annotation'

exports.type = TYPE

/**
 * Detects usage of HTML5 ruby annotation.
 */
exports.func = (name, attributes) => {
  if (name === 'ruby') {
    return util.createFeature(name, TYPE)
  }
}
