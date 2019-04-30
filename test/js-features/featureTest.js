let assert = require('assert')
let detect = require('../../src/js/detect.js')

module.exports = function (program, feature) {
  if (feature === undefined) {
    throw new Error('Feature not defined.')
  }

  let foundFeatures = detect.withFeatures(program, [feature]).features

  assert.strictEqual(true,
    Object.keys(foundFeatures).some((key) => {
      return key === feature.type
    })
  )
}
