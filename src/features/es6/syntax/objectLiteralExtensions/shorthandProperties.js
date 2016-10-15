const TYPE = 'shorthandProperties';

exports.type = TYPE;

/**
 * Detects usage of ES6 object extension for shorthand properties.
 */
exports.func = (node, parent) => {
  if (node.type === 'Property' && node.shorthand) {
    return Object.assign({}, node.loc, { type: TYPE });
  }
}
