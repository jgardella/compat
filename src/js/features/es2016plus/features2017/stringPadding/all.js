let padStart = require('./padStart.js')
let padEnd = require('./padEnd.js')

module.exports.groupName = 'String padding'

let features = {}
features[padStart.type] = padStart
features[padEnd.type] = padEnd

module.exports.features = features
