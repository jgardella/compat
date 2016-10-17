let compatTable = require('./compatTable.js')

/**
 * Checks for feature compatibility errors.
 * @param usedFeatures Object features to check for compatibility issues
 * @param envs string[] id's of environments to check for compatability issues with
 * @return Array detected compatiblilty errors
 */
exports.checkFeatureCompatibility = (usedFeatures, envs) => {
  let errors = {}

  Object.keys(usedFeatures).forEach((feature) => {
    if (!compatTable.featureDefined(feature)) {
      errors[feature] = {
        features: usedFeatures[feature],
        error: 'featureUndefined'
      }
    } else {
      let error = {
        features: usedFeatures[feature],
        error: 'incompatibility',
        incompatEnvs: [],
        partialEnvs: []
      }
      envs.forEach((env) => {
        const featureSupported = compatTable.featureSupportedByEnv(feature, env)
        if (featureSupported === 'flag' || typeof featureSupported === 'number') {
          error.partialEnvs.push(env)
        } else if (featureSupported === false) {
          error.incompatEnvs.push(env)
        }
      })

      if (error.incompatEnvs.length || error.partialEnvs.length > 0) {
        errors[feature] = error
      }
    }
  })

  return errors
}
