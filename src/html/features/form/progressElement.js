let util = require('../util.js')

const TYPE = 'Progress element'

exports.type = TYPE

/**
 * Detects usage of HTML5 progress element.
 */
exports.func = (name, attributes) => {
  if (name === 'progress') {
    return util.createFeature(name, TYPE)
  }
}
