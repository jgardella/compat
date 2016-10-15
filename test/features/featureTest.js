let assert = require('assert');
let extract = require('../../src/extract.js');

module.exports = function (program, feature) {
  if (feature === undefined) {
    throw new Error('Feature not defined.');
  }

  assert.equal(true,
    extract.withFeatures(program, [feature.func]).some((foundFeature) => {
      return foundFeature.type === feature.type;
    })
  );
}
