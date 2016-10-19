let syntax = require('./syntax/all.js')
let bindings = require('./bindings/all.js')
let functions = require('./functions/all.js')
let builtIns = require('./built-ins/all.js')
let builtInExtensions = require('./built-inExtensions/all.js')
let subclassing = require('./built-inExtensions/all.js')

module.exports.groupName = 'es6'

let features = {}
features[syntax.groupName] = syntax.features
features[bindings.groupName] = bindings.features
features[functions.groupName] = functions.features
features[builtIns.groupName] = builtIns.features
features[builtInExtensions.groupName] = builtInExtensions.features
features[subclassing.groupName] = subclassing.features

module.exports.features = features
