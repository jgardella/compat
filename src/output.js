let colors = require('colors')
let supportedFeatures = require('./supportedFeatures.json')

module.exports.outputErrors = (errors, fileName) => {
  const numErrors = Object.getOwnPropertyNames(errors).length
  if (numErrors > 0) {
    console.log(colors.bold('In file "' + fileName + '": ') + colors.red(numErrors + ' errors'))
  }
  Object.keys(errors).forEach((errorKey) => {
    const error = errors[errorKey]
    if (error.error === 'featureUndefined') {
      console.log(colors.blue('undefined feature: ' + errorKey))
    } else if (error.error === 'incompatibility') {
      const incompatEnvString = error.incompatEnvs.join(', ')
      const partialEnvString = error.partialEnvs.join(', ')

      if (incompatEnvString.length > 0 || partialEnvString.length > 0) {
        const linesUsed =
          error.features.map((feature) => {
            return feature.start.line
          }).filter((v, i, a) => {
            return a.indexOf(v) === i
          }).reduce((prev, curr, idx) => {
            return idx === 0 ? curr : prev + ', ' + curr
          }, '')
        console.log('  feature: ' + errorKey)
        console.log('  used on line(s): ' + linesUsed)
      }
      if (incompatEnvString.length > 0) {
        console.log(colors.red('    incompatible: ' + incompatEnvString))
      }
      if (partialEnvString.length > 0) {
        console.log(colors.yellow('    partial:      ' + partialEnvString))
      }
    }
  })
}

module.exports.outputSupportedFeatures = () => {
  Object.keys(supportedFeatures).forEach((key) => {
    const featureGroup = supportedFeatures[key]
    console.log(colors.green(key))
    Object.keys(featureGroup).forEach((key) => {
      const subtests = featureGroup[key]
      console.log(colors.green('  ' + key))
      if (subtests !== undefined) {
        subtests.forEach((subtest) => {
          console.log(colors.yellow('    ' + subtest))
        })
      }
    })
  })
}
