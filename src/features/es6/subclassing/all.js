let arraySubclassing = require('./array.js')
let regExpSubclassing = require('./regExp.js')
let functionSubclassing = require('./function.js')
let promiseSubclassing = require('./promise.js')
let miscSubclassing = require('./miscSubclassables/all.js')

module.exports.groupName = 'Subclassing'

let features = {}
features[arraySubclassing.type] = arraySubclassing
features[regExpSubclassing.type] = regExpSubclassing
features[functionSubclassing.type] = functionSubclassing
features[promiseSubclassing.type] = promiseSubclassing
features[miscSubclassing.groupName] = miscSubclassing.features

module.exports.features = features
