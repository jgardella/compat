let objectStaticMethods = require('./objectStaticMethods.js')
let stringStaticMethods = require('./stringStaticMethods.js')
let stringPrototypeMethods = require('./stringPrototypeMethods.js')
let regExpPrototypeProperties = require('./regExpPrototypeProperties.js')
let arrayStaticMethods = require('./arrayStaticMethods.js')
let arrayPrototypeMethods = require('./arrayPrototypeMethods.js')
let numberProperties = require('./numberProperties.js')
let mathMethods = require('./mathMethods.js')
let datePrototypeSymbol = require('./datePrototypeSymbol.js')

module.exports.groupName = 'Built-In Extensions'

let features = {}
features[objectStaticMethods.type] = objectStaticMethods
features[stringStaticMethods.type] = stringStaticMethods
features[stringPrototypeMethods.type] = stringPrototypeMethods
features[regExpPrototypeProperties.type] = regExpPrototypeProperties
features[arrayStaticMethods.type] = arrayStaticMethods
features[arrayPrototypeMethods.type] = arrayPrototypeMethods
features[numberProperties.type] = numberProperties
features[mathMethods.type] = mathMethods
features[datePrototypeSymbol.type] = datePrototypeSymbol

module.exports.features = features
