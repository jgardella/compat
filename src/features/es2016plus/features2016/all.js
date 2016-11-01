let exponentiationOperator = require('./exponentiationOperator.js')
let arrayPrototypeIncludes = require('./arrayPrototypeIncludes.js')

module.exports.groupName = '2016 features'

let features = {}
features[exponentiationOperator.type] = exponentiationOperator.feature
features[arrayPrototypeIncludes.type] = arrayPrototypeIncludes.feature

module.exports.features = features
