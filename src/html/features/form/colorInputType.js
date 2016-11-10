let util = require('../util.js')

const TYPE = 'Color input type'

exports.type = TYPE

/**
 * Detects usage of HTML5 color input type.
 */
exports.func = (name, attributes) => {
  if (name === 'input' &&
      attributes.type === 'color'
  ) {
    return util.createFeature(name, TYPE)
  }
}
