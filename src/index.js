let yargs = require('yargs')
let fs = require('fs')
let compat = require('./compat.js')
let output = require('./output.js')

const argv =
  yargs
    .alias({
      'target': 't',
      'envs': 'e',
      'features': 'f',
      'ignoreFeatures': 'i',
      'recursive': 'r',
      'config': 'c'
    })
    .array(['target', 'envs', 'features', 'ignoreFeatures'])
    .boolean(['supportedFeatures', 'supportedFeatureGroups', 'enabledFeatures', 'supportedEnvs'])
    .describe({
      'target': 'file(s) and directories containing files to check for compatibility',
      'envs': 'environment(s) to check for compatiblity with',
      'features': 'feature(s) and/or feature group(s) to check for',
      'ignoreFeatures': 'feature(s) and/or feature group(s) to ignore',
      'recursive': 'enters directories specified in target recursively',
      'supportedEnvs': 'prints out all supported environments',
      'supportedFeatures': 'prints out tree of supported features',
      'supportedFeatureGroups': 'prints out supported feature groups and their features',
      'enabledFeatures': 'prints out the features that will be enabled for detection with the provided flags',
      'config': 'path to config file (must have .json extension)'
    })
    .default({
      'target': ['.'],
      'envs': ['ie11', 'chrome54', 'firefox49', 'edge13', 'edge14', 'safari9', 'safari10'],
      'features': ['all'],
      'ignoreFeatures': [],
      'config': './.compatrc.json'
    })
    .config()
    .version()
    .help(false)
    .argv

if (argv.supportedFeatures ||
    argv.supportedFeatureGroups ||
    argv.supportedEnvs
) {
  if (argv.supportedFeatures) {
    const supportedFeatures = compat.getSupportedFeatures()
    output.outputSupportedFeatures(supportedFeatures)
  }

  if (argv.supportedFeatureGroups) {
    const supportedFeatureGroups = compat.getSupportedFeatureGroups()
    output.outputSupportedFeatureGroups(supportedFeatureGroups)
  }

  if (argv.supportedEnvs) {
    const supportedEnvs = compat.getSupportedEnvs()
    output.outputSupportedEnvs(supportedEnvs)
  }
} else {
  const nonExistentTargets = []
  const filesToCheck =
    [].concat.apply([],
      argv.target.filter((fileName) => {
        if (fs.existsSync(fileName)) {
          return true
        }
        nonExistentTargets.push(fileName)
        return false
      }).map((fileName) => {
        const fileStat = fs.lstatSync(fileName)
        if (fileStat.isDirectory()) {
          return getFilesInDirectory(fileName, argv.recursive)
            .filter((fileName) => { return fileName.endsWith('.js') })
        } else {
          return [fileName]
        }
      })
    )

  output.outputNonExistentTargets(nonExistentTargets)

  const undefinedEnvs = compat.getUndefinedEnvs(argv.envs)
  output.outputUndefinedEnvs(undefinedEnvs)

  if (argv.enabledFeatures) {
    const enabledFeatures = compat.getEnabledFeatures(argv.features, argv.ignoreFeatures)
    output.outputEnabledFeatures(enabledFeatures)
  }

  const errors = compat.check(filesToCheck, argv.envs, argv.features, argv.ignoreFeatures)
  output.outputErrors(errors)
}

function getFilesInDirectory (path, recursive) {
  if (!path.endsWith('/')) {
    path = path + '/'
  }
  let filesInDir = fs.readdirSync(path)

  return [].concat.apply([],
    filesInDir.map((file) => {
      const isDir = fs.lstatSync(path + '/' + file).isDirectory()
      if (isDir) {
        if (recursive) {
          return getFilesInDirectory(path + file + '/', recursive)
        } else {
          return []
        }
      } else {
        return [path + file]
      }
    })
  )
}
