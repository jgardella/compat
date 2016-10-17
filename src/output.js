module.exports.outputErrors = (errors) => {
  errors.forEach((error) => {
    if (error.error === 'featureUndefined') {
      console.log('undefined feature: ' + error.type)
    } else if (error.error === 'incompatibility') {
      const incompatEnvString = error.incompatEnvs.join(', ')
      const partialEnvString = error.partialEnvs.join(', ')

      if (incompatEnvString.length > 0 || partialEnvString.length > 0) {
        console.log('feature: ' + error.type)
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
