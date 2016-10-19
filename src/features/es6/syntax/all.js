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

module.exports.groupName = 'Syntax'

let features = {}
features[defaultFunctionParams.type] = defaultFunctionParams
features[restParameters.type] = restParameters
features[spreadOperator.type] = spreadOperator
features[objectLiteralExtensions.groupName] = objectLiteralExtensions.features
features[forOfLoops.type] = forOfLoops
features[octalAndBinaryLiterals.groupName] = octalAndBinaryLiterals.features
features[templateLiterals.type] = templateLiterals
features[destructuringDeclarations.type] = destructuringDeclarations
features[destructuringAssignment.type] = destructuringAssignment
features[destructuringParameters.type] = destructuringParameters
features[newTarget.type] = newTarget

module.exports.features = features
