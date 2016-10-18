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
      'ignoreFeature': 'i'
    })
    .array(['target', 'env', 'feature', 'ignoreFeature'])
    .describe({
      'target': 'file(s) and directories containing files to check for compatibility',
      'env': 'environment(s) to check for compatiblity with',
      'feature': 'feature(s) or feature group(s) to check for',
      'ignoreFeature': 'feature(s) to ignore',
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

const filesToCheck =
  [].concat.apply([],
    argv.target.map((fileName) => {
      const isDir = fs.lstatSync(fileName).isDirectory()
      if (isDir) {
        return fs.readdirSync(fileName)
          .filter((dirFileName) => { return dirFileName.endsWith('.js') })
          .map((dirFileName) => { return fileName + '/' + dirFileName })
      } else {
        return [fileName]
      }
    })
  )

filesToCheck.forEach((fileName) => {
  let fileContents = fs.readFileSync(fileName, 'utf8')
  let featuresToExtract = features.getFeatures(argv.feature, argv.ignoreFeature)

  let usedFeatures = extract.withFeatures(fileContents, featuresToExtract)
  let errors = check.checkFeatureCompatibility(usedFeatures, argv.env)
  console.log('In file "' + fileName + '":')
  output.outputErrors(errors)
})
