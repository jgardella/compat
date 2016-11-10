let htmlparser = require('htmlparser2')

/**
 * Detects features in the provided html text,
 * scanning for the provided list of features.
 * @param html {string} html text
 * @param features array of features to look for
 */
exports.withFeatures = (html, features) => {
  let foundFeatures = {}

  let parser =
    new htmlparser.Parser({
      onopentag: (name, attributes) => {
        features.forEach((feature) => {
          let foundFeature = feature.func(name, attributes)
          if (foundFeature !== undefined) {
            if (foundFeatures[foundFeature.type] === undefined) {
              foundFeatures[foundFeature.type] = []
            }
            foundFeatures[foundFeature.type].push(foundFeature)
          }
        })
      }
    }, { decodeEntities: true })

  parser.write(html)
  parser.end()
  return foundFeatures
}
