let util = require('./util.js')

const TYPE = 'Reversed attribute of ordered lists'

exports.type = TYPE

/**
 * Detects usage of HTML5 ordered list reversed attribute.
 */
exports.func = (name, attributes) => {
  if (name === 'ol' &&
      attributes.reversed !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
