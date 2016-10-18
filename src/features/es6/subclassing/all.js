let arraySubclassing = require('./array.js')
let regExpSubclassing = require('./regExp.js')
let functionSubclassing = require('./function.js')
let promiseSubclassing = require('./promise.js')
let miscSubclassing = require('./miscSubclassables/all.js')

module.exports = [
  arraySubclassing,
  regExpSubclassing,
  functionSubclassing,
  promiseSubclassing,
  miscSubclassing
]
