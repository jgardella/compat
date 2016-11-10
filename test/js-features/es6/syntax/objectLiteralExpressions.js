/* eslint-env mocha */
const featuresPath = '../../../../src/js/features/es6/syntax/objectLiteralExtensions/'
let featureTest = require('../../featureTest.js')
let computedProperties = require(featuresPath + 'computedProperties.js')
let shorthandProperties = require(featuresPath + 'shorthandProperties.js')
let shorthandMethods = require(featuresPath + 'shorthandMethods.js')
let stringKeyedShorthandMethods = require(featuresPath + 'stringKeyedShorthandMethods.js')
let computedShorthandMethods = require(featuresPath + 'computedShorthandMethods.js')
let computedAccessors = require(featuresPath + 'computedAccessors.js')

describe('Object Literal Extensions', function () {
  it('should extract computed properties', function () {
    let program = `var x = 'y'; ({ [x]: 1 });`
    featureTest(program, computedProperties)
  })

  it('should extract shorthand properties', function () {
    let program = `var a = 7, b = 8, c = {a,b};`
    featureTest(program, shorthandProperties)
  })

  it('should extract shorthand methods', function () {
    let program = `({ y() {} })`
    featureTest(program, shorthandMethods)
  })

  it('should extract string-keyed shorthand methods', function () {
    let program = `({ 'y'() {} })`
    featureTest(program, stringKeyedShorthandMethods)
  })

  it('should extract computed shorthand methods', function () {
    let program = `var x = 'y'; ({ [x](){ return 1; } })`
    featureTest(program, computedShorthandMethods)
  })

  it('should extract computed accessors', function () {
    let program =
      `var x = 'y',
           valueSet,
           obj = {
             get [x] () { return 1 },
             set [x] (value) { valueSet = value }
           };
      `
    featureTest(program, computedAccessors)
  })
})
