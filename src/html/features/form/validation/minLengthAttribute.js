let util = require('../../util.js')

const TYPE = 'Minimum length attribute for input fields'

exports.type = TYPE

/**
 * Detects usage of HTML5 input field minimum length attribute.
 */
exports.func = (name, attributes) => {
  if (name === 'input' &&
      attributes.minlength !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
