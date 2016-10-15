let esprima = require('esprima');
let estraverse = require('estraverse');

const esprimaOptions = {
  loc: true
};

/**
 * Extracts features from the provided program text,
 * only scanning for the provided list of features.
 * @param program {string} program text
 * @param features array of features to look for
 */
function withFeatures(program, features) {
  return traverseAST(esprima.parse(program, esprimaOptions), features);
}

/**
 * Traverses the given AST, applying every function
 * in the list of functions to every node.
 * @param ast AST in ESTree format
 * @param funcs {Function[]} list of functions to apply to each node
 * @return array of found features
 */
function traverseAST(ast, funcs) {
  let foundFeatures = [];

  estraverse.traverse(ast, {
    enter: function (node, parent) {
      funcs.forEach((func) => {
        let feature = func(node, parent);
        if (feature !== undefined) {
          foundFeatures = foundFeatures.concat(feature);
        }
      });
    },
    leave: function (node, parent) {

    }
  });

  return foundFeatures;
}

module.exports = {
  withFeatures: withFeatures
}
