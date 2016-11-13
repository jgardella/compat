let fs = require('fs')
let path = require('path')
let https = require('https')
let buildJSON = require('./buildJSON.js')

const dataDir = path.join(__dirname, '../../data')
const tmpDataDir = path.join(__dirname, '../../data/tmp')

const tmpHtmlTable = path.join(__dirname, '../../data/tmp/htmlTable.json')
const tmpES6Data = path.join(__dirname, '../../data/tmp/data-es6.js')
const tmpES2016PlusData = path.join(__dirname, '../../data/tmp/data-es2016plus.js')
const tmpESNextBrowsers = path.join(__dirname, '../../data/tmp/esnext-browsers.js')

const htmlDataURL = 'https://raw.githubusercontent.com/Fyrd/caniuse/master/data.json'
const es6DataURL = 'https://raw.githubusercontent.com/kangax/compat-table/gh-pages/data-es6.js'
const es2016PlusDataURL = 'https://raw.githubusercontent.com/jgardella/compat-table/gh-pages/data-es2016plus.js'
const esNextBrowsersURL = 'https://raw.githubusercontent.com/jgardella/compat-table/gh-pages/esnext-browsers.js'

const shaFile = path.join(__dirname, '../../data/shas.json')

function githubAPIOptions (path) {
  return {
    host: 'api.github.com',
    path: path,
    headers: {
      'user-agent': 'node.js',
      'Accept': 'application/vnd.github.v3.sha'
    }
  }
}

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
        reject('Failed to download file at ' + url + ' (' + err + ')')
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

function getLatestCommitSHA (owner, repo, ref) {
  return new Promise((resolve, reject) => {
    const path = '/repos/' + owner + '/' + repo + '/commits/' + ref
    https.get(githubAPIOptions(path), (res) => {
      if (res.statusCode === 200) {
        resolve(res.headers.etag)
      } else {
        reject('Failed to load latest commit')
      }
    })
    .on('error', (err) => {
      reject('Failed to load commit SHA at path ' + path + ' (' + err + ')')
    })
  })
}

function isUpToDate (compatTableLocation) {
  return new Promise((resolve, reject) => {
    let currentSHAs
    if (!fs.existsSync(shaFile) || !fs.existsSync(compatTableLocation)) {
      currentSHAs = {
        js: '',
        html: ''
      }
    } else {
      currentSHAs = require(shaFile)
    }

    getLatestCommitSHA('kangax', 'compat-table', 'heads/gh-pages')
      .then((jsSHA) => {
        getLatestCommitSHA('fyrd', 'caniuse', 'heads/master')
          .then((htmlSHA) => {
            if (jsSHA !== currentSHAs.js ||
                htmlSHA !== currentSHAs.html
            ) {
              fs.writeFileSync(shaFile, JSON.stringify({
                js: jsSHA,
                html: htmlSHA
              }, null, 2))
              resolve(false)
            } else {
              resolve(true)
            }
          })
      })
      .catch((err) => {
        reject(err)
      })
  })
}

function createDirectoryStructure () {
  return new Promise((resolve, reject) => {
    fs.mkdir(dataDir, (err) => {
      if (err && err.code !== 'EEXIST') {
        reject('Error creating folder ' + dataDir + ' (' + err + ')')
      } else {
        fs.mkdir(tmpDataDir, (err) => {
          if (err && err.code !== 'EEXIST') {
            reject('Error creating folder ' + tmpDataDir + ' (' + err + ')')
          }
          resolve()
        })
      }
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
    createDirectoryStructure().then(() => {
      isUpToDate(compatTableLocation).then((upToDate) => {
        if (upToDate) {
          resolve(false)
        } else {
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
                resolve(true)
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
        }
      }).catch((err) => {
        reject(err)
      })
    })
    .catch((err) => {
      reject(err)
    })
  })
}
