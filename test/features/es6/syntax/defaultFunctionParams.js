let featureTest = require('../../featureTest.js');
let defaultFunctionParams = require('../../../../src/features/es6/syntax/defaultFunctionParams.js');

describe('Default Function Params Feature', function () {
  it('should find in named function', function () {
    let program = `function f(a = 1) {}`;
    featureTest(program, defaultFunctionParams);
  });

  it('should find in anonymous function', function () {
    let program = `(a = 1) => {}`;
    featureTest(program, defaultFunctionParams);
  });
});
