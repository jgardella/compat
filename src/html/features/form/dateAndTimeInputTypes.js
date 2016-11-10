let util = require('../util.js')

const TYPE = 'Range input type'

exports.type = TYPE

/**
 * Detects usage of HTML5 range input type.
 */
exports.func = (name, attributes) => {
  if (name === 'input' &&
      (attributes.type === 'date' ||
       attributes.type === 'month' ||
       attributes.type === 'week' ||
       attributes.type === 'time' ||
       attributes.type === 'datetime-local')
  ) {
    return util.createFeature(name, TYPE)
  }
}
