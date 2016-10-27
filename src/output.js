let fs = require('fs')
let colors = require('colors')
let all = require('./features/all.js')
let features = require('./features.js')
let compatTable = require('./compatTable.js')

module.exports.outputErrors = (errors, fileName) => {
  const numErrors = Object.getOwnPropertyNames(errors).length
  if (numErrors > 0) {
    const fileContents = fs.readFileSync(fileName, 'utf8')
    console.log(colors.bold(colors.underline(fileName) + '": ') + colors.red(numErrors + ' errors'))
    Object.keys(errors).forEach((errorKey) => {
      const error = errors[errorKey]
      if (error.error === 'featureUndefined') {
        console.log(colors.blue('undefined feature: ' + errorKey))
      } else if (error.error === 'incompatibility') {
        const incompatEnvString = error.incompatEnvs.join(', ')
        const partialEnvString = error.partialEnvs.join(', ')

        if (incompatEnvString.length > 0 || partialEnvString.length > 0) {
          console.log(colors.bold('  feature: ') + errorKey)
          if (incompatEnvString.length > 0) {
            console.log(colors.red(colors.bold('    incompatible: ') + incompatEnvString))
          }
          if (partialEnvString.length > 0) {
            console.log(colors.yellow(colors.bold('    partial:      ') + partialEnvString))
          }

          error.features.forEach((feature) => {
            console.log(colors.bold('    ' + 'on line ' + colors.underline(feature.loc.start.line) + ':'))
            console.log(indentString(fileContents.slice(feature.range[0], feature.range[1]), 6))
          })
        }
      }
    })
  }
}

module.exports.outputSupportedFeatures = () => {
  console.log(colors.bold('Supported Features: '))
  outputSupportedFeaturesTree(all.features, 1)
}

function outputSupportedFeaturesTree (node, level) {
  const indentation = Array(level * 2 + 1).join(' ')
  Object.keys(node).forEach((key) => {
    const child = node[key]
    if (child.type === undefined) {
      console.log(colors.bold(indentation + key))
      outputSupportedFeaturesTree(child, level + 1)
    } else {
      console.log(indentation + child.type)
    }
  })
}

module.exports.outputSupportedFeatureGroups = () => {
  const featureGroupMap = features.getFlattenedFeatureGroupMap()

  console.log(colors.bold('Supported Feature Groups: '))
  Object.keys(featureGroupMap).forEach((featureGroupName) => {
    const featureGroup = featureGroupMap[featureGroupName]
    console.log('  ' + featureGroupName)
    featureGroup.forEach((feature) => {
      console.log('    ' + feature.type)
    })
  })
}

module.exports.outputEnabledFeatures = (enabledFeatures) => {
  if (enabledFeatures.length > 0) {
    console.log(colors.bold('Enabled Features: '))
    enabledFeatures.forEach((feature) => {
      console.log('  ' + feature.type)
    })
  } else {
    console.log(colors.bold('Enabled Features: ') + 'none')
  }
}

module.exports.outputSupportedEnvs = () => {
  const envs = compatTable.getEnvTable()
  console.log(colors.bold('Supported Envs: '))
  Object.keys(envs).forEach((envGroupId) => {
    const envGroup = envs[envGroupId]
    console.log('  ' + colors.bold(envGroupId))
    Object.keys(envGroup).forEach((envId) => {
      console.log('    ' + envId)
    })
  })
}

module.exports.outputUndefinedEnvs = (undefinedEnvs) => {
  undefinedEnvs.forEach((envId) => {
    console.log(colors.red('Environment "' + envId + '" is not defined. Ignoring.'))
  })
}

module.exports.outputNonExistentTargets = (nonExistentTargets) => {
  nonExistentTargets.forEach((targetPath) => {
    console.log(colors.red('Target "' + targetPath + '" does not exist. Ignoring.'))
  })
}

function indentString (string, spaces) {
  return Array(spaces + 1).join(' ') + string.split('\n').join('\n' + Array(spaces + 1).join(' '))
}

module.exports.outputTableStatus = (tableStatus) => {
  switch (tableStatus) {
    case compatTable.LOAD_TABLE_RESULT.SUCCESS:
      console.log(colors.blue(
        'Succesfully updated compatibility table to v' + compatTable.getVersion()
      ))
      break
    case compatTable.LOAD_TABLE_RESULT.UP_TO_DATE:
      console.log(colors.blue(
        'Compatibility table already up to date (v' + compatTable.getVersion() + ')'
      ))
      break
    case compatTable.LOAD_TABLE_RESULT.FAILED_OLD_TABLE:
      console.log(colors.blue(
        'Failed to update compatibility table, using old version (v' + compatTable.getVersion() + ')'
      ))
  }
}
