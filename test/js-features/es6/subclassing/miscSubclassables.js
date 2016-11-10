/* eslint-env mocha */
let booleanSubclassing = require('../../../../src/js/features/es6/subclassing/miscSubclassables/boolean.js')
let numberSubclassing = require('../../../../src/js/features/es6/subclassing/miscSubclassables/number.js')
let stringSubclassing = require('../../../../src/js/features/es6/subclassing/miscSubclassables/string.js')
let errorSubclassing = require('../../../../src/js/features/es6/subclassing/miscSubclassables/error.js')
let mapSubclassing = require('../../../../src/js/features/es6/subclassing/miscSubclassables/map.js')
let setSubclassing = require('../../../../src/js/features/es6/subclassing/miscSubclassables/set.js')
let featureTest = require('../../featureTest.js')

describe('Miscellaneous Subclassables Feature', function () {
  it('should find parent class Boolean', function () {
    let program = `class C extends Boolean {}`
    featureTest(program, booleanSubclassing)
  })

  it('should find parent class Number', function () {
    let program = `class C extends Number {}`
    featureTest(program, numberSubclassing)
  })

  it('should find parent class String', function () {
    let program = `class C extends String {}`
    featureTest(program, stringSubclassing)
  })

  it('should find parent class Error', function () {
    let program = `class C extends Error {}`
    featureTest(program, errorSubclassing)
  })

  it('should find parent class Map', function () {
    let program = `class C extends Map {}`
    featureTest(program, mapSubclassing)
  })

  it('should find parent class Set', function () {
    let program = `class C extends Set {}`
    featureTest(program, setSubclassing)
  })
})
