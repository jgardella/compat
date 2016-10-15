const TYPE = 'shorthandMethods';

exports.type = TYPE;

/**
 * Detects usage of ES6 object extension for shorthand methods.
 */
exports.func = (node, parent) => {
  if (node.type === 'Property'
    && node.key.type === 'Identifier'
    && node.method
    && node.kind === 'init') {
    return Object.assign({}, node.loc, { type: TYPE });
  }
}
