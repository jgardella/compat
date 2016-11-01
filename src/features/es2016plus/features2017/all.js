let objectValues = require('./objectValues.js')
let objectEntries = require('./objectEntries.js')
let objectGetOwnPropertyDescriptors = require('./objectGetOwnPropertyDescriptors.js')
let stringPadding = require('./stringPadding/all.js')

module.exports.groupName = '2017 features'

let features = {}
features[objectValues.type] = objectValues.feature
features[objectEntries.type] = objectEntries.feature
features[objectGetOwnPropertyDescriptors.type] = objectGetOwnPropertyDescriptors.feature
features[stringPadding.type] = stringPadding.feature

module.exports.features = features
