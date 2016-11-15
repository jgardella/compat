let util = require('../util.js')

const TYPE = 'Datalist element'

exports.type = TYPE

/**
 * Detects usage of HTML5 datalist element.
 */
exports.func = (node) => {
  if (util.hasSomeName(node, ['datalist'])) {
    return util.createFeature(node, TYPE)
  }
}
