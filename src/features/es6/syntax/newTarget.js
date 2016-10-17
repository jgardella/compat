let util = require('../../util.js')

const TYPE = 'new.target'

exports.type = TYPE

/**
 * Detects usage of ES6 new.target.
 */
exports.func = (node, parent) => {
  if (node.type === 'MetaProperty' &&
      node.meta.name === 'new' &&
      node.property.name === 'target'
  ) {
    return util.createFeature(node.loc, TYPE)
  }
}
