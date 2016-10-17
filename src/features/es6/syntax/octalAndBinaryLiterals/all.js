let octalLiterals = require('./octalLiterals.js')
let binaryLiterals = require('./binaryLiterals.js')

module.exports = [].concat(
  octalLiterals.func,
  binaryLiterals.func
)
