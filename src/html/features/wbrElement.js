let util = require('./util.js')

const TYPE = 'wbr (word break opportunity) element'

exports.type = TYPE

/**
 * Detects usage of HTML5 wbr element.
 */
exports.func = (name, attributes) => {
  if (name === 'wbr') {
    return util.createFeature(name, TYPE)
  }
}
