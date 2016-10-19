let computedAccessors = require('./computedAccessors.js')
let computedProperties = require('./computedProperties.js')
let computedShorthandMethods = require('./computedShorthandMethods.js')
let shorthandMethods = require('./shorthandMethods.js')
let shorthandProperties = require('./shorthandProperties.js')
let stringKeyedShorthandMethods = require('./stringKeyedShorthandMethods.js')

module.exports.groupName = 'Object Literal Extensions'

let features = {}
features[computedAccessors.type] = computedAccessors
features[computedProperties.type] = computedProperties
features[computedShorthandMethods.type] = computedShorthandMethods
features[shorthandMethods.type] = shorthandMethods
features[shorthandProperties.type] = shorthandProperties
features[stringKeyedShorthandMethods.type] = stringKeyedShorthandMethods

module.exports.features = features
