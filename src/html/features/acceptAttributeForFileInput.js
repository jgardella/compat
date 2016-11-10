let util = require('./util.js')

const TYPE = 'accept attribute for file input'

exports.type = TYPE

/**
 * Detects usage of HTML5 file input accept attribute.
 */
exports.func = (name, attributes) => {
  if (name === 'input' &&
      attributes.type === 'file' &&
      attributes.accept !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
