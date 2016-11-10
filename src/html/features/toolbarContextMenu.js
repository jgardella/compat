let util = require('./util.js')

const TYPE = 'Toolbar/context menu'

exports.type = TYPE

/**
 * Detects usage of HTML5 menu element.
 */
exports.func = (name, attributes) => {
  if (name === 'menu') {
    return util.createFeature(name, TYPE)
  }
}
