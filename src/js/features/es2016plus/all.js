let features2016 = require('./features2016/all.js')
let features2017 = require('./features2017/all.js')
let misc2017 = require('./misc2017/all.js')

module.exports.groupName = 'ES2016+'

let features = {}
features[features2016.groupName] = features2016.features
features[features2017.groupName] = features2017.features
features[misc2017.groupName] = misc2017.features

module.exports.features = features
