let colors = require('colors')
let all = require('./features/all.js')

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
  outputSupportedFeaturesTree(all.features, 0)
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
