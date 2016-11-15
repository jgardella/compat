let htmlparser = require('htmlparser2')
let domutils = require('domutils')

/**
 * Detects features in the provided html text,
 * scanning for the provided list of features.
 * @param html {string} html text
 * @param features array of features to look for
 */
exports.withFeatures = (html, features) => {
  let foundFeatures = {}

  let handler =
    new htmlparser.DomHandler((err, dom) => {
      if (err !== null) {
        foundFeatures = {
          type: 'error',
          errorMsg: err
        }
      }

      foundFeatures = traverseDOM(dom, features)
    }, { withStartIndices: true })

  let parser = new htmlparser.Parser(handler)
  parser.write(html)
  parser.end()

  return foundFeatures
}

function applyFuncToDOMNodes (dom, func) {
  func(dom)
  const children = domutils.getChildren(dom)
  if (children !== undefined) {
    children.forEach((child) => {
      applyFuncToDOMNodes(child, func)
    })
  }
}

function traverseDOM (dom, features) {
  let foundFeatures = {}

  dom.forEach((topLevelNode) => {
    applyFuncToDOMNodes(topLevelNode, (node) => {
      features.forEach((feature) => {
        let foundFeature = feature.func(node)
        if (foundFeature !== undefined) {
          if (foundFeatures[foundFeature.type] === undefined) {
            foundFeatures[foundFeature.type] = []
          }
          foundFeatures[foundFeature.type].push(foundFeature)
        }
      })
    })
  })

  return foundFeatures
}
