let fs = require('fs')
let check = require('./check.js')
let envMap = require('./envs.js')
let js = require('./js/check.js')

exports.getSupportedEnvs = () => {
  return envMap.envs
}

exports.getUndefinedEnvs = (envs) => {
  return envs.filter((envId) => {
    return !envMap.isEnvDefined(envId)
  })
}

exports.getSupportedFeatures = () => {
  let obj = {}

  obj[js.name] = js.getSupportedFeatures()

  return obj
}

exports.getSupportedFeatureGroups = () => {
  let obj = {}

  obj[js.name] = js.getSupportedFeatureGroups()

  return obj
}

exports.getEnabledFeatures = (features, ignoreFeatures) => {
  let obj = {}

  obj[js.name] = js.getEnabledFeatures(features, ignoreFeatures)

  return obj
}

exports.check = (targets, envs, features, ignoreFeatures) => {
  const definedEnvs = envs.filter((envId) => {
    return envMap.isEnvDefined(envId)
  })

  const jsFeaturesToExtract = js.getEnabledFeatures(features, ignoreFeatures)

  let obj = {}
  targets.forEach((fileName) => {
    let fileContents = fs.readFileSync(fileName, 'utf8')
    let usedFeatures = {}
    if (fileName.match(js.fileRegex)) {
      let jsFeatures = js.check(fileContents, jsFeaturesToExtract)
      Object.assign(usedFeatures, jsFeatures)
    }

    const errors = check.checkFeatureCompatibility(usedFeatures, definedEnvs)
    if (Object.keys(errors).length > 0) {
      obj[fileName] = errors
    }
  })

  return obj
}
