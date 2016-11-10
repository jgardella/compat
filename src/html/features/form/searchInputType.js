let util = require('../util.js')

const TYPE = 'Search input type'

exports.type = TYPE

/**
 * Detects usage of HTML5 search input type.
 */
exports.func = (name, attributes) => {
  if (name === 'input' &&
      attributes.type === 'search'
  ) {
    return util.createFeature(name, TYPE)
  }
}
