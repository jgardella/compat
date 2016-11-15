let util = require('../util.js')

const TYPE = 'Email, telephone, & URL input types'

exports.type = TYPE

/**
 * Detects usage of HTML5 email, telephone, and URL input types.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['input']) &&
      (util.attributeIs(node, 'type', 'email') ||
      util.attributeIs(node, 'type', 'tel') ||
      util.attributeIs(node, 'type', 'url'))
  ) {
    return util.createFeature(node, TYPE)
  }
}
