let fs = require('fs')
let path = require('path')
let https = require('https')
let buildJSON = require('./buildJSON.js')

const tmpHtmlTable = path.join(__dirname, '../../data/tmp/htmlTable.json')
const tmpES6Data = path.join(__dirname, '../../data/tmp/data-es6.js')
const tmpES2016PlusData = path.join(__dirname, '../../data/tmp/data-es2016plus.js')
const tmpESNextBrowsers = path.join(__dirname, '../../data/tmp/esnext-browsers.js')

const htmlDataURL = 'https://raw.githubusercontent.com/Fyrd/caniuse/master/data.json'
const es6DataURL = 'https://raw.githubusercontent.com/kangax/compat-table/gh-pages/data-es6.js'
const es2016PlusDataURL = 'https://raw.githubusercontent.com/jgardella/compat-table/gh-pages/data-es2016plus.js'
const esNextBrowsersURL = 'https://raw.githubusercontent.com/jgardella/compat-table/gh-pages/esnext-browsers.js'

function downloadFile (url, filePath) {
  return new Promise((resolve, reject) => {
    let file = fs.createWriteStream(filePath)
    file.on('open', () => {
      https.get(url, (res) => {
        res.pipe(file)
        file.on('finish', () => {
          file.close(resolve)
        })
      })
      .on('error', (err) => {
        reject(err)
      })
    })
  })
}

function collapseStats (statsObj) {
  let collapsedObj = {}

  Object.keys(statsObj).forEach((envKey) => {
    let envObj = statsObj[envKey]

    Object.keys(envObj).forEach((subEnvKey) => {
      let value = envObj[subEnvKey]

      if (value.startsWith('a')) {
        collapsedObj[envKey + subEnvKey] = 'p'
      } else {
        collapsedObj[envKey + subEnvKey] = envObj[subEnvKey]
      }
    })
  })

  return collapsedObj
}

function createHTMLTable () {
  return new Promise((resolve, reject) => {
    downloadFile(htmlDataURL, tmpHtmlTable)
      .then(() => {
        let obj = require(tmpHtmlTable)
        let data = obj.data
        let agents = obj.agents
        let compat = {}
        let envs = []

        Object.keys(data).forEach((featureKey) => {
          let feature = data[featureKey]
          compat[feature.title] = collapseStats(feature.stats)
        })

        Object.keys(agents).forEach((agentKey) => {
          let env = agents[agentKey]
          env.versions.forEach((version) => {
            if (version !== null) {
              envs.push(agentKey + version)
            }
          })
        })

        resolve({
          envs: envs,
          compat: compat
        })
      })
      .catch((err) => {
        reject(err)
      })
  })
}

function createJSTable () {
  return new Promise((resolve, reject) => {
    downloadFile(es6DataURL, tmpES6Data)
      .then(() => {
        downloadFile(es2016PlusDataURL, tmpES2016PlusData)
          .then(() => {
            downloadFile(esNextBrowsersURL, tmpESNextBrowsers)
              .then(() => {
                let jsTable = buildJSON.buildTable(tmpES6Data, tmpES2016PlusData)
                resolve(jsTable)
              })
              .catch((err) => {
                reject(err)
              })
          })
          .catch((err) => {
            reject(err)
          })
      })
      .catch((err) => {
        reject(err)
      })
  })
}

function deleteIfExists (path) {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path)
  }
}

function cleanup () {
  deleteIfExists(tmpHtmlTable)
  deleteIfExists(tmpES6Data)
  deleteIfExists(tmpES2016PlusData)
  deleteIfExists(tmpESNextBrowsers)
}

module.exports.createTable = (compatTableLocation) => {
  return new Promise((resolve, reject) => {
    createHTMLTable()
      .then((htmlTable) => {
        createJSTable().then((jsTable) => {
          let fullTable = {
            htmlEnvs: htmlTable.envs,
            jsEnvs: jsTable.envs,
            compat: Object.assign({}, htmlTable.compat, jsTable.compat)
          }

          fs.writeFileSync(compatTableLocation, JSON.stringify(fullTable, null, 2))
          cleanup()
          resolve()
        })
        .catch((err) => {
          cleanup()
          reject('Failed to create JS table: ' + err)
        })
      })
      .catch((err) => {
        cleanup()
        reject('Failed to create HTML table: ' + err)
      })
  })
}
