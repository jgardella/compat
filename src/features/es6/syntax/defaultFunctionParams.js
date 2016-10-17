const TYPE = 'default function parameters'

exports.type = TYPE

/**
 * Detects usage of ES6 default function parameters.
 */
exports.func = (node, parent) => {
  // not sure if this if a sufficient check for default parameters
  if (node.type === 'AssignmentPattern') {
    return Object.assign({}, node.loc, { type: TYPE })
  }
}
