const TYPE = 'computedAccessors';

exports.type = TYPE;

/**
 * Detects usage of ES6 object extension for computed accessors.
 */
exports.func = (node, parent) => {
  if (node.type === 'Property'
    && node.computed
    && (node.kind === 'get' || node.kind === 'set')) {
    return Object.assign({}, node.loc, { type: TYPE });
  }
}
