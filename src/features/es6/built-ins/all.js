let map = require('./map.js')
let set = require('./set.js')
let weakMap = require('./weakMap.js')
let weakSet = require('./weakSet.js')
let proxy = require('./proxy.js')
let reflect = require('./reflect.js')
let promise = require('./promise.js')
let symbol = require('./symbol.js')

module.exports = [
  map.func,
  set.func,
  weakMap.func,
  weakSet.func,
  proxy.func,
  reflect.func,
  promise.func,
  symbol.func
]
