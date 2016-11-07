let exponentiationOperator = require('./exponentiationOperator.js')
let arrayPrototypeIncludes = require('./arrayPrototypeIncludes.js')

module.exports.groupName = '2016 features'

let features = {}
features[exponentiationOperator.type] = exponentiationOperator
features[arrayPrototypeIncludes.type] = arrayPrototypeIncludes

module.exports.features = features
