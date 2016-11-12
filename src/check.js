/**
 * Checks for feature compatibility errors.
 * @param usedFeatures Object features to check for compatibility issues
 * @param envs string[] id's of environments to check for compatability issues with
 * @param compatTableLocation string path to compatibility table
 * @return Array detected compatiblilty errors
 */
exports.checkFeatureCompatibility = (usedFeatures, envs, compatTableLocation) => {
  let compatTable = require(compatTableLocation)

  let errors = {}

  Object.keys(usedFeatures).forEach((feature) => {
    if (!featureDefined(compatTable, feature)) {
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
        const featureSupported = featureSupportedByEnv(compatTable, feature, env)
        if (featureSupported === 'flag' ||
            featureSupported === 'p' ||
            typeof featureSupported === 'number'
        ) {
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

/**
 * Checks whether the provided feature is supported by the provided environment.
 * @param obj compatability table
 * @param string feature type of feature
 * @param string env id of environment
 * @return support value for the feature
 */
function featureSupportedByEnv (compatTable, feature, env) {
  if (compatTable[feature][env] === undefined) {
    return false
  }
  return compatTable[feature][env]
}

/**
 * Checks whether the provided feature is defined in the compatibility table.
 * @param obj compatability table
 * @param string feature type of feature
 * @return boolean true if feature is defined in table, false otherwise
 */
function featureDefined (compatTable, feature) {
  return compatTable[feature] !== undefined
}
