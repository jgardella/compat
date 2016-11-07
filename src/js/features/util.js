/**
 * Creates a feature with the given location and type.
 * @param node Object ESTree node for feature
 * @param type type of feature
 * @return Object created feature
 */
exports.createFeature = (node, type) => {
  return {
    type: type,
    loc: node.loc,
    range: node.range
  }
}
