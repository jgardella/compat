let util = require('../util.js')

const TYPE = 'input placeholder attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 input placeholder attribute.
 */
exports.func = (name, attributes) => {
  if (name === 'input' &&
      attributes.placeholder !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
