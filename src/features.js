let all = require('./features/all.js')
let es6 = require('./features/es6/all.js')

module.exports.getFeatures = (featureIds, ignoreFeatureIds) => {
  let features = []

  if (featureIds.indexOf('all') > -1) {
    features = all
  } else {
    if (featureIds.indexOf('es6') > -1) {
      features = features.concat(es6)
    }
  }

  return features.filter((feature) => {
    return !ignoreFeatureIds.some((ignoreFeature) => {
      return feature.type === ignoreFeature
    })
  })
}
