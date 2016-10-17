let assert = require('assert')
let extract = require('../../src/extract.js')

module.exports = function (program, feature) {
  if (feature === undefined) {
    throw new Error('Feature not defined.')
  }

  let foundFeatures = extract.withFeatures(program, [feature.func])

  assert.equal(true,
    Object.keys(foundFeatures).some((key) => {
      return key === feature.type
    })
  )
}
