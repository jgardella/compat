let detect = require('./detect.js')
let features = require('../features.js')
let all = require('./features/all.js')

const featureGroupMap = {
  'html': './html/features/all.js',
  'form': './html/features/form/all.js',
  'form-validation': './html/features/form/validation/all.js'
}

exports.getSupportedFeatures = () => {
  return all.features
}

exports.getSupportedFeatureGroups = () => {
  return features.getFlattenedFeatureGroupMap(featureGroupMap)
}

exports.getEnabledFeatures = (featureIds, ignoreFeatureIds) => {
  return features.getFeatures(featureGroupMap, all.features, featureIds, ignoreFeatureIds)
}

exports.name = 'HTML'

exports.fileRegex = /.*\.html/

exports.check = (fileContents, features) => {
  return detect.withFeatures(fileContents, features)
}
