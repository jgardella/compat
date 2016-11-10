let util = require('./util.js')

const TYPE = 'Attributes for form submission'

exports.type = TYPE

/**
 * Detects usage of HTML5 form submission attributes.
 */
exports.func = (name, attributes) => {
  if ((name === 'form' &&
      (attributes.action !== undefined ||
       attributes.enctype !== undefined ||
       attributes.method !== undefined ||
       attributes.novalidate !== undefined ||
       attributes.target !== undefined)) ||
      ((name === 'button' ||
        name === 'input' ||
        name === 'keygen' ||
        name === 'object' ||
        name === 'select' ||
        name === 'textarea') &&
          attributes.formaction !== undefined ||
          attributes.formenctype !== undefined ||
          attributes.formmethod !== undefined ||
          attributes.formnovalidate !== undefined ||
          attributes.formtarget !== undefined)
  ) {
    return util.createFeature(name, TYPE)
  }
}
