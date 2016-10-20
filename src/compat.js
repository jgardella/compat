let yargs = require('yargs')
let fs = require('fs')
let extract = require('./extract.js')
let check = require('./check.js')
let output = require('./output.js')
let features = require('./features.js')

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
    .help()
    .argv

if (argv.supportedFeatures) {
  output.outputSupportedFeatures()
}

if (argv.supportedFeatureGroups) {
  output.outputSupportedFeatureGroups()
}

if (argv.supportedEnvs) {
  output.outputSupportedEnvs()
}

const filesToCheck =
  [].concat.apply([],
    argv.target.map((fileName) => {
      const isDir = fs.lstatSync(fileName).isDirectory()
      if (isDir) {
        return getFilesInDirectory(fileName, argv.recursive)
          .filter((fileName) => { return fileName.endsWith('.js') })
      } else {
        return [fileName]
      }
    })
  )

const featuresToExtract = features.getFeatures(argv.features, argv.ignoreFeatures)

if (argv.enabledFeatures) {
  output.outputEnabledFeatures(featuresToExtract)
}

filesToCheck.forEach((fileName) => {
  let fileContents = fs.readFileSync(fileName, 'utf8')
  let usedFeatures = extract.withFeatures(fileContents, featuresToExtract)
  let errors = check.checkFeatureCompatibility(usedFeatures, argv.envs)
  output.outputErrors(errors, fileName)
})

function getFilesInDirectory (path, recursive) {
  if (!path.endsWith('/')) {
    path = path + '/'
  }
  let filesInDir = fs.readdirSync(path)

  if (recursive) {
    return [].concat.apply([],
      filesInDir.map((file) => {
        const isDir = fs.lstatSync(path + '/' + file).isDirectory()
        if (isDir) {
          return getFilesInDirectory(path + file + '/', recursive)
        } else {
          return [path + file]
        }
      })
    )
  } else {
    return filesInDir
  }
}
