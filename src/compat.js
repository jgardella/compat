let extract = require('./extract.js')
let check = require('./check.js')

let usedFeatures = extract.withAllFeatures(`
  let x = 3;
  let y = 4;
  let z = { x, y }
`)

let errors = check.checkFeatureCompatibility(usedFeatures, ['ie11', 'chrome54'])

console.log(JSON.stringify(errors, null, 4))
