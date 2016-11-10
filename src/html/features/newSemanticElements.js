let util = require('./util.js')

const TYPE = 'New semantic elements'

exports.type = TYPE

/**
 * Detects usage of HTML5 semantic elements.
 */
exports.func = (name, attributes) => {
  if (name === 'section' ||
      name === 'article' ||
      name === 'aside' ||
      name === 'header' ||
      name === 'footer' ||
      name === 'nav' ||
      name === 'figure' ||
      name === 'figcaption' ||
      name === 'time' ||
      name === 'mark' ||
      name === 'main'
  ) {
    return util.createFeature(name, TYPE)
  }
}
