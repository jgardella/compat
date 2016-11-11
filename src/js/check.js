let detect = require('./detect.js')
let features = require('../features.js')
let all = require('./features/all.js')

const featureGroupMap = {
  'all': './js/features/all.js',
  'es6': './js/features/es6/all.js',
  'es6-syntax': './js/features/es6/syntax/all.js',
  'es6-syntax-objectLiteralExtensions': './js/features/es6/syntax/objectLiteralExtensions/all.js',
  'es6-syntax-octalAndBinaryLiterals': './js/features/es6/syntax/octalAndBinaryLiterals/all.js',
  'es6-bindings': './js/features/es6/bindings/all.js',
  'es6-functions': './js/features/es6/functions/all.js',
  'es6-builtIns': './js/features/es6/built-ins/all.js',
  'es6-builtInExtensions': './js/features/es6/built-inExtensions/all.js',
  'es6-subclassing': './js/features/es6/subclassing/all.js',
  'es6-subclassing-miscSubclassables': './js/features/es6/subclassing/miscSubclassables/all.js',
  'es2016+': './js/features/es2016plus/all.js',
  'es2016': './js/features/es2016plus/features2016/all.js',
  'es2017': './js/features/es2016plus/features2017/all.js',
  'es2016-stringPadding': './js/features/es2016plus/features2017/stringPadding/all.js',
  'es2017-misc': './js/features/es2016plus/misc2017/all.js'
}

exports.getSupportedFeatures = () => {
  return all.features
}

exports.getSupportedFeatureGroups = () => {
  return features.getFlattenedFeatureGroupMap(featureGroupMap)
}

exports.getEnabledFeatures = (featureIds, ignoreFeatureIds) => {
  return features.getFeatures(featureGroupMap, featureIds, ignoreFeatureIds)
}

exports.name = 'JavaScript'

exports.fileRegex = /.*\.js/

exports.check = (fileContents, features) => {
  return detect.withFeatures(fileContents, features)
}
