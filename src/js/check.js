let detect = require('./detect.js')
let features = require('./features.js')
let all = require('./features/all.js')

exports.getSupportedFeatures = () => {
  return all.features
}

exports.getSupportedFeatureGroups = () => {
  return features.getFlattenedFeatureGroupMap()
}

exports.getEnabledFeatures = (featureIds, ignoreFeatureIds) => {
  return features.getFeatures(featureIds, ignoreFeatureIds)
}

exports.name = 'JavaScript'

exports.fileRegex = /.*\.js/

exports.check = (fileContents, features) => {
  return detect.withFeatures(fileContents, features)
}
