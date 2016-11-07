let fs = require('fs')
let detectJS = require('./js/detect.js')
let check = require('./check.js')
let featuresJS = require('./js/features.js')
let allJS = require('./js/features/all.js')
let envMap = require('./envs.js')

exports.getSupportedFeatures = () => {
  return allJS.features
}

exports.getSupportedFeatureGroups = () => {
  return featuresJS.getFlattenedFeatureGroupMap()
}

exports.getSupportedEnvs = () => {
  return envMap.envs
}

exports.getUndefinedEnvs = (envs) => {
  return envs.filter((envId) => {
    return !envMap.isEnvDefined(envId)
  })
}

exports.getEnabledFeatures = (features, ignoreFeatures) => {
  return featuresJS.getFeatures(features, ignoreFeatures)
}

exports.check = (targets, envs, features, ignoreFeatures) => {
  const definedEnvs = envs.filter((envId) => {
    if (envMap.isEnvDefined(envId)) {
      return true
    }
    return false
  })

  const featuresToExtract = featuresJS.getFeatures(features, ignoreFeatures)

  let obj = {}
  targets.forEach((fileName) => {
    let fileContents = fs.readFileSync(fileName, 'utf8')
    let usedFeatures = detectJS.withFeatures(fileContents, featuresToExtract)
    const errors = check.checkFeatureCompatibility(usedFeatures, definedEnvs)
    if (Object.keys(errors).length > 0) {
      obj[fileName] = errors
    }
  })

  return obj
}
