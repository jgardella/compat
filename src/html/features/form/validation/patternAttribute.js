let util = require('../../util.js')

const TYPE = 'Pattern attribute for input fields'

exports.type = TYPE

/**
 * Detects usage of HTML5 input field pattern attribute.
 */
exports.func = (name, attributes) => {
  if (name === 'input' &&
      attributes.pattern !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
