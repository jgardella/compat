module.exports.getFeatures = (featureGroupMap, allFeatures, featureIds, ignoreFeatureIds) => {
  let featureMap = createFeatureMap(allFeatures)
  let features = featureIdsToFeatures(featureGroupMap, featureMap, featureIds)
  let featuresToIgnore = featureIdsToFeatures(featureGroupMap, featureMap, ignoreFeatureIds)

  let result = features.filter((feature) => {
    return !featuresToIgnore.some((ignoreFeature) => {
      return feature.type === ignoreFeature.type
    })
  })

  return result
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
      if (featureMap[featureId] !== undefined) {
        features.push(featureMap[featureId])
      }
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

function createFeatureMap (allFeatures) {
  let featureMap = {}

  flattenGroupToFeatures(allFeatures).forEach((feature) => {
    featureMap[feature.type] = feature
  })

  return featureMap
}
