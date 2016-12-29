#! /usr/bin/env node
let yargs = require('yargs')
let fs = require('fs')
let os = require('os')
let path = require('path')
let compat = require('./compat.js')
let output = require('./output.js')
let createTable = require('./tableUpdater/createTable.js')

const argv =
  yargs
    .alias({
      'target': 't',
      'jsEnvs': 'j',
      'htmlEnvs': 'h',
      'features': 'f',
      'ignoreFeatures': 'i',
      'recursive': 'r',
      'config': 'c'
    })
    .array(['target', 'jsEnvs', 'htmlEnvs', 'features', 'ignoreFeatures'])
    .boolean(['supportedFeatures', 'supportedFeatureGroups', 'enabledFeatures', 'supportedEnvs'])
    .describe({
      'target': 'file(s) and directories containing files to check for compatibility',
      'jsEnvs': 'environment(s) to check for JavaScript compatiblity',
      'htmlEnvs': 'environment(s) to check for HTML compatiblity',
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
      'jsEnvs': ['ie11', 'chrome56', 'firefox51', 'edge13', 'edge14', 'safari9', 'safari10'],
      'htmlEnvs': ['ie11', 'chrome56', 'firefox51', 'edge13', 'edge14', 'safari9', 'safari10'],
      'features': ['js', 'html'],
      'ignoreFeatures': [],
      'config': './.compatrc.json'
    })
    .config()
    .version()
    .help(false)
    .argv

const compatTableLocation = path.join(os.homedir(), '/.compat-data/compatTable.json')

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
    afterLoadingTable(compatTableLocation, (compatTableLocation) => {
      const supportedEnvs = compat.getSupportedEnvs(compatTableLocation)
      output.outputSupportedEnvs(supportedEnvs)
    })
  }
} else {
  afterLoadingTable(compatTableLocation, (compatTableLocation) => {
    runCompat(compatTableLocation)
  })
}

function runCompat (compatTableLocation) {
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
            .filter((fileName) => {
              return fileName.endsWith('.html') || fileName.endsWith('.js')
            })
        } else {
          return [fileName]
        }
      })
    )

  output.outputNonExistentTargets(nonExistentTargets)

  const undefinedEnvs = compat.getUndefinedEnvs(compatTableLocation, argv.jsEnvs, argv.htmlEnvs)
  output.outputUndefinedEnvs(undefinedEnvs)

  if (argv.enabledFeatures) {
    const enabledFeatures = compat.getEnabledFeatures(argv.features, argv.ignoreFeatures)
    output.outputEnabledFeatures(enabledFeatures)
  }

  const errors = compat.check(filesToCheck, argv.jsEnvs, argv.htmlEnvs, argv.features, argv.ignoreFeatures, compatTableLocation)
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

function afterLoadingTable (compatTableLocation, func) {
  createTable.createTable(compatTableLocation)
    .then((updated) => {
      if (updated) {
        console.log('Compatibility table updated.')
      } else {
        console.log('Compatibility table already up to date.')
      }
      func(compatTableLocation)
    })
    .catch((err) => {
      console.log(err)
      if (fs.existsSync(compatTableLocation)) {
        console.log('Using previous compatability table.')
        func(compatTableLocation)
      } else {
        console.log('No previous compatibility table. Exiting.')
      }
    })
}
