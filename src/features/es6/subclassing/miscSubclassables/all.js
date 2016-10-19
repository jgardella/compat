let booleanSubclassing = require('./boolean.js')
let numberSubclassing = require('./number.js')
let stringSubclassing = require('./string.js')
let errorSubclassing = require('./error.js')
let mapSubclassing = require('./map.js')
let setSubclassing = require('./set.js')

module.exports.groupName = 'Miscellaneous Subclassables'

let features = {}
features[booleanSubclassing.type] = booleanSubclassing
features[numberSubclassing.type] = numberSubclassing
features[stringSubclassing.type] = stringSubclassing
features[errorSubclassing.type] = errorSubclassing
features[mapSubclassing.type] = mapSubclassing
features[setSubclassing.type] = setSubclassing

module.exports.features = features
