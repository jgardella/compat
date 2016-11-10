let util = require('./util.js')

const TYPE = 'Details & Summary elements'

exports.type = TYPE

/**
 * Detects usage of HTML5 details and summary elements.
 */
exports.func = (name, attributes) => {
  if (name === 'details' ||
      name === 'summary'
  ) {
    return util.createFeature(name, TYPE)
  }
}
