const TYPE = 'spreadOperator';

exports.type = TYPE;

/**
 * Detects usage of ES6 spread operator.
 */
exports.func = (node, parent) => {
  // not sure if this if a sufficient check for spread operator
  if (node.type === 'SpreadElement') {
    return Object.assign({}, node.loc, { type: TYPE });
  }
}
