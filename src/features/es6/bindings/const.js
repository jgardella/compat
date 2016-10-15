exports.type = 'const';

/**
 * Detects usage of ES6 const keyword.
 */
exports.func = (node, parent) => {
  if (node.type === 'VariableDeclaration' && node.kind === 'const') {
    let loc = node.loc.start;
    loc.type = 'const';
    return loc;
  }
}
