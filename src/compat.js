let yargs = require('yargs')
let fs = require('fs')
let extract = require('./extract.js')
let check = require('./check.js')
let output = require('./output.js')

const argv =
  yargs
    .alias({
      'target': 't',
      'env': 'e'
    })
    .array(['target', 'env'])
    .describe({
      'target': 'file(s) and directories containing files to check for compatibility',
      'env': 'environments to check for compatiblity with'
    })
    .default({
      'target': ['.'],
      'env': ['ie11', 'chrome54', 'firefox49', 'edge13', 'edge14', 'safari9', 'safari10']
    })
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

  let usedFeatures = extract.withAllFeatures(fileContents)
  let errors = check.checkFeatureCompatibility(usedFeatures, argv.env)
  console.log('In file "' + fileName + '":')
  output.outputErrors(errors)
})
