let util = require('./util.js')

const TYPE = 'dataset & data-* node.attribs'

exports.type = TYPE

/**
 * Detects usage of HTML5 data-* node.attribs.
 */
exports.func = (node) => {
  if (node.attribs !== undefined &&
      Object.keys(node.attribs).some((attribute) => attribute.startsWith('data-'))
  ) {
    return util.createFeature(node, TYPE)
  }
}
