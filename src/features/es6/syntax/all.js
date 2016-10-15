let defaultFunctionParams = require('./defaultFunctionParams.js');
let restParameters = require('./restParameters.js');
let spreadOperator = require('./spreadOperator.js');
let objectLiteralExtensions = require('./objectLiteralExtensions/all.js');

module.exports = [].concat(
  defaultFunctionParams.func,
  restParameters.func,
  spreadOperator.func,
  objectLiteralExtensions
);
