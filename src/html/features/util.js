let domutils = require('domutils')

/**
 * Creates a feature with the given type.
 * @node type node containing feature
 * @param type type of feature
 * @return Object created feature
 */
exports.createFeature = (node, type) => {
  return {
    type: type,
    range: [node.startIndex]
  }
}

exports.hasSomeName = (node, names) => {
  return names.some((name) => {
    return domutils.getName(node) === name
  })
}

exports.hasSomeAttribute = (node, attributes) => {
  return attributes.some((attribute) => {
    return domutils.hasAttrib(node, attribute)
  })
}

exports.attributeIs = (node, name, value) => {
  return domutils.getAttributeValue(node, name) === value
}
