const TYPE = 'const'

exports.type = TYPE

/**
 * Detects usage of ES6 const keyword.
 */
exports.func = (node, parent) => {
  if (node.type === 'VariableDeclaration' && node.kind === 'const') {
    return Object.assign({}, node.loc, { type: TYPE })
  }
}
