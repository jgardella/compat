let bindings = require('./bindings/all.js');
let syntax = require('./syntax/all.js');

module.exports = [].concat(
  bindings,
  syntax
);
