let map = require('./map.js')
let set = require('./set.js')
let weakMap = require('./weakMap.js')
let weakSet = require('./weakSet.js')
let proxy = require('./proxy.js')
let reflect = require('./reflect.js')
let promise = require('./promise.js')
let symbol = require('./symbol.js')

module.exports.groupName = 'Built-Ins'

let features = {}
features[map.type] = map
features[set.type] = set
features[weakMap.type] = weakMap
features[weakSet.type] = weakSet
features[proxy.type] = proxy
features[reflect.type] = reflect
features[promise.type] = promise
features[symbol.type] = symbol

module.exports.features = features
