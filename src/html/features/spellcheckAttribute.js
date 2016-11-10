let util = require('./util.js')

const TYPE = 'Spellcheck attribute'

exports.type = TYPE

/**
 * Detects usage of HTML5 textarea/input spellcheck attribute.
 */
exports.func = (name, attributes) => {
  if ((name === 'textarea' ||
       name === 'input') &&
      attributes.spellcheck !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
