let util = require('./util.js')

const TYPE = 'sandbox attribute for iframes'

exports.type = TYPE

/**
 * Detects usage of HTML5 iframe sandbox attribute.
 */
exports.func = (name, attributes) => {
  if (name === 'iframe' &&
      attributes.sandbox !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
