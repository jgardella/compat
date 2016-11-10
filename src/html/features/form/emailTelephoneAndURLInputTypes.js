let util = require('../util.js')

const TYPE = 'Email, telephone, & URL input types'

exports.type = TYPE

/**
 * Detects usage of HTML5 email, telephone, and URL input types.
 */
exports.func = (name, attributes) => {
  if (name === 'input' &&
      (attributes.type === 'email' ||
       attributes.type === 'tel' ||
       attributes.type === 'url')
  ) {
    return util.createFeature(name, TYPE)
  }
}
