let features2016 = require('./features2016/all.js')

module.exports.groupName = 'ES2016+'

let features = {}
features[features2016.groupName] = features2016.features

module.exports.features = features
