let util = require('./util.js')

const TYPE = 'New semantic elements'

exports.type = TYPE

/**
 * Detects usage of HTML5 semantic elements.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, [
    'section',
    'article',
    'aside',
    'header',
    'footer',
    'nav',
    'figure',
    'figcaption',
    'time',
    'mark',
    'main'
  ])) {
    return util.createFeature(node, TYPE)
  }
}
