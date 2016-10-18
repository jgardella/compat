let computedAccessors = require('./computedAccessors.js')
let computedProperties = require('./computedProperties.js')
let computedShorthandMethods = require('./computedShorthandMethods.js')
let shorthandMethods = require('./shorthandMethods.js')
let shorthandProperties = require('./shorthandProperties.js')
let stringKeyedShorthandMethods = require('./stringKeyedShorthandMethods.js')

module.exports = [].concat(
  computedAccessors,
  computedProperties,
  computedShorthandMethods,
  shorthandMethods,
  shorthandProperties,
  stringKeyedShorthandMethods
)
