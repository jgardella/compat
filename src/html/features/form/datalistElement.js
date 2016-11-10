let util = require('../util.js')

const TYPE = 'Datalist element'

exports.type = TYPE

/**
 * Detects usage of HTML5 datalist element.
 */
exports.func = (name, attributes) => {
  if (name === 'datalist') {
    return util.createFeature(name, TYPE)
  }
}
