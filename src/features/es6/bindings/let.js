exports.type = 'let';

/**
 * Detects usage of ES6 let keyword.
 */
exports.func = (node, parent) => {
  if (node.type === 'VariableDeclaration' && node.kind === 'let') {
    let loc = node.loc.start;
    loc.type = 'let';
    return loc;
  }
}
