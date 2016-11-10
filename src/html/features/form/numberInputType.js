let util = require('../util.js')

const TYPE = 'Number input type'

exports.type = TYPE

/**
 * Detects usage of HTML5 number input type.
 */
exports.func = (name, attributes) => {
  if (name === 'input' &&
      attributes.type === 'number'
  ) {
    return util.createFeature(name, TYPE)
  }
}
