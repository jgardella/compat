let util = require('../util.js')

const TYPE = 'Multiple file selection'

exports.type = TYPE

/**
 * Detects usage of HTML5 multiple file selection.
 */
exports.func = (name, attributes) => {
  if (name === 'input' &&
      attributes.multiple !== undefined
  ) {
    return util.createFeature(name, TYPE)
  }
}
