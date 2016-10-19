let es6 = require('./es6/all.js')

module.exports.groupName = 'all'

let features = {}
features[es6.groupName] = es6.features

module.exports.features = features
