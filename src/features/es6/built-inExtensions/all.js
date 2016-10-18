let objectStaticMethods = require('./objectStaticMethods.js')
let stringStaticMethods = require('./stringStaticMethods.js')
let stringPrototypeMethods = require('./stringPrototypeMethods.js')
let regExpPrototypeProperties = require('./regExpPrototypeProperties.js')
let arrayStaticMethods = require('./arrayStaticMethods.js')
let arrayPrototypeMethods = require('./arrayPrototypeMethods.js')
let numberProperties = require('./numberProperties.js')
let mathMethods = require('./mathMethods.js')
let datePrototypeSymbol = require('./datePrototypeSymbol.js')

module.exports = [
  objectStaticMethods.func,
  stringStaticMethods.func,
  stringPrototypeMethods.func,
  regExpPrototypeProperties.func,
  arrayStaticMethods.func,
  arrayPrototypeMethods.func,
  numberProperties.func,
  mathMethods.func,
  datePrototypeSymbol.func
]
