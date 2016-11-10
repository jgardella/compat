let assert = require('assert')
let detect = require('../../src/html/detect.js')

module.exports = function (program, feature) {
  if (feature === undefined) {
    throw new Error('Feature not defined.')
  }

  let foundFeatures = detect.withFeatures(program, [feature])

  assert.equal(true,
    Object.keys(foundFeatures).some((key) => {
      return key === feature.type
    })
  )
}
