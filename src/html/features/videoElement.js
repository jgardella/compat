let util = require('./util.js')

const TYPE = 'Video element'

exports.type = TYPE

/**
 * Detects usage of HTML5 video element.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['video'])) {
    return util.createFeature(node, TYPE)
  }
}
