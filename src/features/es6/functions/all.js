let arrowFunctions = require('./arrowFunctions.js')
let classFeature = require('./class.js')
let superFeature = require('./super.js')
let generators = require('./generators.js')

module.exports.groupName = 'Functions'

let features = {}
features[arrowFunctions.type] = arrowFunctions
features[classFeature.type] = classFeature
features[superFeature.type] = superFeature
features[generators.type] = generators

module.exports.features = features
