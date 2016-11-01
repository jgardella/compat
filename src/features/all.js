let es6 = require('./es6/all.js')
let es2016plus = require('./es2016plus/all.js')

module.exports.groupName = 'all'

let features = {}
features[es6.groupName] = es6.features
features[es2016plus.groupName] = es2016plus.features

module.exports.features = features
