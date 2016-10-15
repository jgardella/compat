let extract = require('./extract.js');

let usedFeatures = extract.withAllFeatures(`
  let x = 3;
`);

console.log(JSON.stringify(usedFeatures));
