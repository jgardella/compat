const TYPE = 'computedProperties';

exports.type = TYPE;

/**
 * Detects usage of ES6 object extension for computed properties.
 */
exports.func = (node, parent) => {
  if (node.type === 'Property' && node.computed) {
    return Object.assign({}, node.loc, { type: TYPE });
  }
}
