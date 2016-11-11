let maxLengthAttribute = require('./maxLengthAttribute.js')
let minLengthAttribute = require('./minLengthAttribute.js')
let patternAttribute = require('./patternAttribute.js')

module.exports.groupName = 'validation'

let features = {}

features[maxLengthAttribute.type] = maxLengthAttribute
features[minLengthAttribute.type] = minLengthAttribute
features[patternAttribute.type] = patternAttribute

module.exports.features = features
