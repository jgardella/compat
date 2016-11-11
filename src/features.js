module.exports.getFeatures = (featureGroupMap, featureIds, ignoreFeatureIds) => {
  let featureMap = createFeatureMap(featureGroupMap)
  let features = featureIdsToFeatures(featureGroupMap, featureMap, featureIds)
  let featuresToIgnore = featureIdsToFeatures(featureGroupMap, featureMap, ignoreFeatureIds)

  return features.filter((feature) => {
    return !featuresToIgnore.some((ignoreFeature) => {
      return feature.type === ignoreFeature.type
    })
  })
}

module.exports.getFlattenedFeatureGroupMap = (featureGroupMap) => {
  let flattenedMap = {}

  Object.keys(featureGroupMap).forEach((key) => {
    flattenedMap[key] = flattenGroupToFeatures(require(featureGroupMap[key]).features)
  })

  return flattenedMap
}

function featureIdsToFeatures (featureGroupMap, featureMap, featureIds) {
  let features = []
  let featureGroups = []

  featureIds.forEach((featureId) => {
    if (featureGroupMap[featureId] !== undefined) {
      featureGroups.push(require(featureGroupMap[featureId]).features)
    } else {
      features.push(featureMap[featureId])
    }
  })

  features =
    [].concat.apply(features,
      featureGroups.map((group) => { return flattenGroupToFeatures(group) })
    ).filter((v, i, a) => { return a.indexOf(v) === i })

  return features
}

function flattenGroupToFeatures (group) {
  let features = []

  Object.keys(group).forEach((key) => {
    const child = group[key]
    if (child.type === undefined) {
      features = features.concat(flattenGroupToFeatures(child))
    } else {
      features.push(child)
    }
  })

  return features
}

function createFeatureMap (featureGroupMap) {
  let featureMap = {}

  flattenGroupToFeatures(require(featureGroupMap['all']).features).forEach((feature) => {
    featureMap[feature.type] = feature
  })

  return featureMap
}
