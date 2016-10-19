let all = require('./features/all.js')
let es6 = require('./features/es6/all.js')

module.exports.getFeatures = (featureIds, ignoreFeatureIds) => {
  let featureGroups = []

  if (featureIds.indexOf('all') > -1) {
    featureGroups.push(all.features)
  } else {
    if (featureIds.indexOf('es6') > -1) {
      featureGroups.push(es6.features)
    }
  }

  let features = [].concat.apply([],
    featureGroups.map((group) => { return flattenGroupToFeatures(group) })
  )

  return features.filter((feature) => {
    return !ignoreFeatureIds.some((ignoreFeature) => {
      return feature.type === ignoreFeature
    })
  })
}

function flattenGroupToFeatures (group) {
  let features = []

  Object.keys(group).forEach((key) => {
    const child = group[key]
    if (child.type === undefined) {
      features = features.concat(flattenGroupToFeatures(child))
    } else {
      features.push(child)
    }
  })

  return features
}
