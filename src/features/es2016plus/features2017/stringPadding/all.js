let padStart = require('./padStart.js')
let padEnd = require('./padEnd.js')

module.exports.groupName = 'String padding'

let features = {}
features[padStart.type] = padStart.feature
features[padEnd.type] = padEnd.feature

module.exports.features = features
