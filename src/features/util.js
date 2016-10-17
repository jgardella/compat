/**
 * Creates a feature with the given location and type.
 * @param loc Object object describing location of feature
 * @param type type of feature
 * @return Object created feature
 */
exports.createFeature = (loc, type) => {
  return Object.assign({}, loc, { type })
}
