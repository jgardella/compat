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
      'env': 'e',
      'feature': 'f',
      'ignoreFeature': 'i',
      'recursive': 'r',
      'config': 'c'
    })
    .array(['target', 'env', 'feature', 'ignoreFeature'])
    .boolean(['supportedFeatures'])
    .describe({
      'target': 'file(s) and directories containing files to check for compatibility',
      'env': 'environment(s) to check for compatiblity with',
      'feature': 'feature(s) or feature group(s) to check for',
      'ignoreFeature': 'feature(s) to ignore',
      'recursive': 'enters directories specified in target recursively',
      'config': 'path to config file (must have .json extension)'
    })
    .default({
      'target': ['.'],
      'env': ['ie11', 'chrome54', 'firefox49', 'edge13', 'edge14', 'safari9', 'safari10'],
      'feature': ['all'],
      'ignoreFeature': [],
      'config': './.compatrc.json'
    })
    .config()
    .help()
    .argv

if (argv.supportedFeatures) {
  output.outputSupportedFeatures()
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

const featuresToExtract = features.getFeatures(argv.feature, argv.ignoreFeature)

filesToCheck.forEach((fileName) => {
  let fileContents = fs.readFileSync(fileName, 'utf8')
  let usedFeatures = extract.withFeatures(fileContents, featuresToExtract)
  let errors = check.checkFeatureCompatibility(usedFeatures, argv.env)
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
