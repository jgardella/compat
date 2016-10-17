const TYPE = 'rest parameters'

exports.type = TYPE

/**
 * Detects usage of ES6 rest parameters.
 */
exports.func = (node, parent) => {
  // not sure if this if a sufficient check for rest parameters
  if (node.type === 'RestElement') {
    return Object.assign({}, node.loc, { type: TYPE })
  }
}
