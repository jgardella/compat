let all = require('./features/all.js')

const featureGroupMap = {
  'es6': './features/es6/all.js',
  'es6-syntax': './features/es6/syntax/all.js',
  'es6-syntax-objectLiteralExtensions': './features/es6/syntax/objectLiteralExtensions/all.js',
  'es6-syntax-octalAndBinaryLiterals': './features/es6/syntax/octalAndBinaryLiterals/all.js',
  'es6-bindings': './features/es6/bindings/all.js',
  'es6-functions': './features/es6/functions/all.js',
  'es6-builtIns': './features/es6/built-ins/all.js',
  'es6-builtInExtensions': './features/es6/built-inExtensions/all.js',
  'es6-subclassing': './features/es6/subclassing/all.js',
  'es6-subclassing-miscSubclassables': './features/es6/subclassing/miscSubclassables/all.js'
}

const featureMap = createFeatureMap()

module.exports.getFeatures = (featureIds, ignoreFeatureIds) => {
  let features = featureIdsToFeatures(featureIds)
  let featuresToIgnore = featureIdsToFeatures(ignoreFeatureIds)

  return features.filter((feature) => {
    return !featuresToIgnore.some((ignoreFeature) => {
      return feature.type === ignoreFeature.type
    })
  })
}

module.exports.getFlattenedFeatureGroupMap = () => {
  let flattenedMap = {}

  Object.keys(featureGroupMap).forEach((key) => {
    console.log(key)
    flattenedMap[key] = flattenGroupToFeatures(require(featureGroupMap[key]).features)
  })

  return flattenedMap
}

function featureIdsToFeatures (featureIds) {
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

function createFeatureMap () {
  let featureMap = {}

  flattenGroupToFeatures(all.features).forEach((feature) => {
    featureMap[feature.type] = feature
  })

  return featureMap
}
