let letFeature = require('../../../../src/features/es6/bindings/let.js');
let featureTest = require('../../featureTest.js');

describe('Let Feature', function () {
  it('should find variable declaration', function () {
    let program = `let x = 4;`;
    featureTest(program, letFeature);
  });

  it('should find for loop initializer', function () {
    let program = `for (let i = 0; i < 2; i++) {}`;
    featureTest(program, letFeature);
  });

  it('should find for-in loop', function () {
    let program = `for (let i in {}) {}`;
    featureTest(program, letFeature);
  });
});
