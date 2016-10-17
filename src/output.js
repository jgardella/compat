module.exports.outputErrors = (errors) => {
  Object.keys(errors).forEach((errorKey) => {
    const error = errors[errorKey]
    if (error.error === 'featureUndefined') {
      console.log('undefined feature: ' + errorKey)
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
        console.log('feature: ' + errorKey)
        console.log('used on lines: ' + linesUsed)
      }
      if (incompatEnvString.length > 0) {
        console.log('  incompatible environments:         ' + incompatEnvString)
      }
      if (partialEnvString.length > 0) {
        console.log('  partially compatible environments: ' + partialEnvString)
      }
    }
  })
}
