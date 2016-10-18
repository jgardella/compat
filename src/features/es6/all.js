let bindings = require('./bindings/all.js')
let syntax = require('./syntax/all.js')
let functions = require('./functions/all.js')
let builtIns = require('./built-ins/all.js')
let builtInExtensions = require('./built-inExtensions/all.js')

module.exports = [].concat(
  bindings,
  syntax,
  functions,
  builtIns,
  builtInExtensions
)
