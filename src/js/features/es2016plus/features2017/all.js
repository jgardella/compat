let objectValues = require('./objectValues.js')
let objectEntries = require('./objectEntries.js')
let objectGetOwnPropertyDescriptors = require('./objectGetOwnPropertyDescriptors.js')
let stringPadding = require('./stringPadding/all.js')

module.exports.groupName = '2017 features'

let features = {}
features[objectValues.type] = objectValues
features[objectEntries.type] = objectEntries
features[objectGetOwnPropertyDescriptors.type] = objectGetOwnPropertyDescriptors
features[stringPadding.groupName] = stringPadding.features

module.exports.features = features
