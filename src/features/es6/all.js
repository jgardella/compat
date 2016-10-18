let bindings = require('./bindings/all.js')
let syntax = require('./syntax/all.js')
let functions = require('./functions/all.js')

module.exports = [].concat(
  bindings,
  syntax,
  functions
)
