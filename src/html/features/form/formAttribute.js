let util = require('../util.js')

const TYPE = 'Form attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 form attribute on inputs.
 */
exports.func = (name, attributes) => {
  if ((name === 'button' ||
       name === 'fieldset' ||
       name === 'input' ||
       name === 'keygen' ||
       name === 'object' ||
       name === 'output' ||
       name === 'select' ||
       name === 'textarea') &&
      attributes.form !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
