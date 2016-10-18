let defaultFunctionParams = require('./defaultFunctionParams.js')
let restParameters = require('./restParameters.js')
let spreadOperator = require('./spreadOperator.js')
let objectLiteralExtensions = require('./objectLiteralExtensions/all.js')
let forOfLoops = require('./forOfLoops.js')
let octalAndBinaryLiterals = require('./octalAndBinaryLiterals/all.js')
let templateLiterals = require('./templateLiterals.js')
let destructuringDeclarations = require('./destructuringDeclarations.js')
let destructuringAssignment = require('./destructuringAssignment.js')
let destructuringParameters = require('./destructuringParameters.js')
let newTarget = require('./newTarget.js')

module.exports = [].concat(
  defaultFunctionParams,
  restParameters,
  spreadOperator,
  objectLiteralExtensions,
  forOfLoops,
  octalAndBinaryLiterals,
  templateLiterals,
  destructuringDeclarations,
  destructuringAssignment,
  destructuringParameters,
  newTarget
)
