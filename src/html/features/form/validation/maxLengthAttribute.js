let util = require('../../util.js')

const TYPE = 'maxlength attribute for input and textarea elements'

exports.type = TYPE

/**
 * Detects usage of HTML5 input/textarea maxlength attribute.
 */
exports.func = (name, attributes) => {
  if ((name === 'input' || name === 'textarea') &&
      attributes.maxlength !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
