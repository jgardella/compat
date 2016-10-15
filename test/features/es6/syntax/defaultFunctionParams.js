let featureTest = require('../../featureTest.js');

describe('Default Function Params Feature', function () {
  it('should find in named function', function () {
    let program = `function f(a = 1) {}`;
    featureTest(program);
  });

  it('should find in anonymous function', function () {
    let program = `(a = 1) => {}`;
    featureTest(program);
  });
});
