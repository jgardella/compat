let detect = require('./detect.js')

/*
exports.getSupportedFeatures = () => {
  return all.features
}

exports.getSupportedFeatureGroups = () => {
  return features.getFlattenedFeatureGroupMap()
}

exports.getEnabledFeatures = (featureIds, ignoreFeatureIds) => {
  return features.getFeatures(featureIds, ignoreFeatureIds)
}
*/

exports.name = 'HTML'

exports.fileRegex = /.*\.html/

exports.check = (fileContents, features) => {
  return detect.withFeatures(fileContents, features)
}
