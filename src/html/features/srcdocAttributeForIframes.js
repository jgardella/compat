let util = require('./util.js')

const TYPE = 'srcdoc attribute for iframes'

exports.type = TYPE

/**
 * Detects usage of HTML5 iframe srcdoc attribute.
 */
exports.func = (name, attributes) => {
  if (name === 'iframe' &&
      attributes.srcdoc !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
