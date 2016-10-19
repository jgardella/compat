let letFeature = require('./let.js')
let constFeature = require('./const.js')

module.exports.groupName = 'Bindings'

let features = {}
features[letFeature.type] = letFeature
features[constFeature.type] = constFeature

module.exports.features = features
