let util = require('../util.js')

const TYPE = 'Meter element'

exports.type = TYPE

/**
 * Detects usage of HTML5 meter element.
 */
exports.func = (name, attributes) => {
  if (name === 'meter') {
    return util.createFeature(name, TYPE)
  }
}
