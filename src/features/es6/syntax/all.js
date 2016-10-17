let defaultFunctionParams = require('./defaultFunctionParams.js')
let restParameters = require('./restParameters.js')
let spreadOperator = require('./spreadOperator.js')
let objectLiteralExtensions = require('./objectLiteralExtensions/all.js')
let forOfLoops = require('./forOfLoops.js')
let octalAndBinaryLiterals = require('./octalAndBinaryLiterals/all.js')
let templateLiterals = require('./templateLiterals.js')

module.exports = [].concat(
  defaultFunctionParams.func,
  restParameters.func,
  spreadOperator.func,
  objectLiteralExtensions,
  forOfLoops.func,
  octalAndBinaryLiterals,
  templateLiterals.func
)
