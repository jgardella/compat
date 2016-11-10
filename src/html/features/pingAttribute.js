let util = require('./util.js')

const TYPE = 'Ping attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 ping attribute.
 */
exports.func = (name, attributes) => {
  if (name === 'a' &&
      attributes.ping !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
