let fs = require('fs')
let check = require('./check.js')
let js = require('./js/index.js')
let html = require('./html/index.js')

function isEnvDefined (allEnvs, env) {
  return allEnvs.some((envId) => { return env === envId })
}

exports.getSupportedEnvs = (compatTableLocation) => {
  const compatTable = require(compatTableLocation)

  return {
    htmlEnvs: compatTable.htmlEnvs,
    jsEnvs: compatTable.jsEnvs
  }
}

exports.getUndefinedEnvs = (compatTableLocation, jsEnvs, htmlEnvs) => {
  const compatTable = require(compatTableLocation)

  let undefinedJSEnvs = jsEnvs.filter((envId) => {
    return !isEnvDefined(compatTable.jsEnvs, envId)
  })

  let undefinedHTMLEnvs = htmlEnvs.filter((envId) => {
    return !isEnvDefined(compatTable.htmlEnvs, envId)
  })

  return undefinedJSEnvs.concat(undefinedHTMLEnvs)
}

exports.getSupportedFeatures = () => {
  let obj = {}

  obj[js.name] = js.getSupportedFeatures()
  obj[html.name] = html.getSupportedFeatures()

  return obj
}

exports.getSupportedFeatureGroups = () => {
  let obj = {}

  obj[js.name] = js.getSupportedFeatureGroups()
  obj[html.name] = html.getSupportedFeatureGroups()

  return obj
}

exports.getEnabledFeatures = (features, ignoreFeatures) => {
  let obj = {}

  obj[js.name] = js.getEnabledFeatures(features, ignoreFeatures)
  obj[html.name] = html.getEnabledFeatures(features, ignoreFeatures)

  return obj
}

exports.check = (targets, jsEnvs, htmlEnvs, features, ignoreFeatures, compatTableLocation) => {
  const compatTable = require(compatTableLocation)

  const definedJSEnvs = jsEnvs.filter((envId) => {
    return isEnvDefined(compatTable.jsEnvs, envId)
  })

  const definedHTMLEnvs = htmlEnvs.filter((envId) => {
    return isEnvDefined(compatTable.htmlEnvs, envId)
  })

  const jsFeaturesToDetect = js.getEnabledFeatures(features, ignoreFeatures)
  const htmlFeaturesToDetect = html.getEnabledFeatures(features, ignoreFeatures)

  let obj = {}
  let parseError = {}
  targets.forEach((fileName) => {
    let fileContents = fs.readFileSync(fileName, 'utf8')
    let jsFeatures = {}
    let htmlFeatures = {}

    if (fileName.match(js.fileRegex)) {
      let newFeatures = js.check(fileContents, jsFeaturesToDetect)

      if (newFeatures.type === 'success') {
        Object.assign(jsFeatures, newFeatures.features)
      } else if (newFeatures.type === 'error') {
        parseError = {
          parse: {
            error: 'parse',
            msg: newFeatures.errorMsg
          }
        }
      }
    }

    if (fileName.match(html.fileRegex)) {
      let newFeatures = html.check(fileContents, htmlFeaturesToDetect)
      Object.assign(htmlFeatures, newFeatures)
    }

    const jsErrors = check.checkFeatureCompatibility(jsFeatures, definedJSEnvs, compatTableLocation)
    const htmlErrors = check.checkFeatureCompatibility(htmlFeatures, definedHTMLEnvs, compatTableLocation)
    const allErrors = Object.assign({}, parseError, jsErrors, htmlErrors)
    if (Object.keys(allErrors).length > 0) {
      obj[fileName] = allErrors
    }
  })

  return obj
}
