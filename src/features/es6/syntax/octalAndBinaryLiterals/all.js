let octalLiterals = require('./octalLiterals.js')
let binaryLiterals = require('./binaryLiterals.js')

module.exports.groupName = 'Octal and Binary Literals'

let features = {}
features[octalLiterals.type] = octalLiterals
features[binaryLiterals.type] = binaryLiterals

module.exports.features = features
