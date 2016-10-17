let compatTable = require('./compatTable.js')

/**
 * Checks for feature compatibility errors.
 * @param usedFeatures Array features to check for compatibility issues
 * @param envs string[] id's of environments to check for compatability issues with
 * @return Array detected compatiblilty errors
 */
exports.checkFeatureCompatibility = (usedFeatures, envs) => {
  let errors = []

  usedFeatures.forEach((feature) => {
    if (!compatTable.featureDefined(feature.type)) {
      errors.push(Object.assign({}, feature, { error: 'featureUndefined' }))
    } else {
      let error = Object.assign({}, feature, { error: 'incompatibility', incompatEnvs: [], partialEnvs: [] })
      envs.forEach((env) => {
        const featureSupported = compatTable.featureSupportedByEnv(feature.type, env)
        if (featureSupported === 'flag' || typeof featureSupported === 'number') {
          error.partialEnvs.push(env)
        } else if (featureSupported === false) {
          error.incompatEnvs.push(env)
        }
      })

      if (error.incompatEnvs.length || error.partialEnvs.length > 0) {
        errors.push(error)
      }
    }
  })

  return errors
}
