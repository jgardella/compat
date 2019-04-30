let fs = require('fs')
let os = require('os')
let path = require('path')
let https = require('https')
let npm = require('npm-programmatic')
let buildJSON = require('./buildJSON.js')

const homeDir = os.homedir()

const dataDir = path.join(homeDir, '/.compat-data')
const tmpDataDir = path.join(homeDir, '/.compat-data/tmp')

const tmpHtmlTable = path.join(homeDir, '/.compat-data/tmp/htmlTable.json')
const tmpES6Data = path.join(homeDir, '/.compat-data/tmp/data-es6.js')
const tmpES2016PlusData = path.join(homeDir, '/.compat-data/tmp/data-es2016plus.js')
const tmpEnvironmentsData = path.join(homeDir, '/.compat-data/tmp/environments.json')
const tmpCommonData = path.join(homeDir, '/.compat-data/tmp/data-common.json')

const htmlDataURL = 'https://raw.githubusercontent.com/Fyrd/caniuse/master/data.json'
const es6DataURL = 'https://raw.githubusercontent.com/kangax/compat-table/gh-pages/data-es6.js'
const es2016PlusDataURL = 'https://raw.githubusercontent.com/kangax/compat-table/gh-pages/data-es2016plus.js'
const environmentsURL = 'https://raw.githubusercontent.com/kangax/compat-table/gh-pages/environments.json'
const commonDataURL = 'https://raw.githubusercontent.com/kangax/compat-table/gh-pages/data-common.json'

const shaFile = path.join(homeDir, '/.compat-data/shas.json')

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
          return reject(new Error('Failed to download file at ' + url + ' (' + err + ')'))
        })
    })
  })
}

function downloadFiles (urls, folderPath) {
  return new Promise((resolve, reject) => {
    urls.forEach((url) => {
      downloadFile(url, folderPath + url.slice(url.lastIndexOf('/')))
        .catch((err) => {
          reject(err)
        })
    })
    resolve()
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

function installJSDeps () {
  return npm.install(['object.assign'], {
    cwd: tmpDataDir,
    save: false
  })
}

// until compat-table offers its data in a JSON format, it
// has to built manually by pulling JS files from the repo
// and installing dependencies manually
function createJSTable () {
  return new Promise((resolve, reject) => {
    downloadFiles([es6DataURL, es2016PlusDataURL, commonDataURL, environmentsURL], tmpDataDir)
      .then(() => {
        installJSDeps()
          .then(() => {
            let jsTable = buildJSON.buildTable(tmpES6Data, tmpES2016PlusData, tmpEnvironmentsData)
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
}

function getLatestCommitSHA (owner, repo, ref) {
  return new Promise((resolve, reject) => {
    const path = '/repos/' + owner + '/' + repo + '/commits/' + ref
    https.get(githubAPIOptions(path), (res) => {
      if (res.statusCode === 200) {
        resolve(res.headers.etag)
      } else {
        reject(new Error('Failed to load latest commit'))
      }
    })
      .on('error', (err) => {
        reject(new Error('Failed to load commit SHA at path ' + path + ' (' + err + ')'))
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
        reject(new Error('Error creating folder ' + dataDir + ' (' + err + ')'))
      } else {
        fs.mkdir(tmpDataDir, (err) => {
          if (err && err.code !== 'EEXIST') {
            reject(new Error('Error creating folder ' + tmpDataDir + ' (' + err + ')'))
          } else {
            resolve()
          }
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
  deleteIfExists(tmpCommonData)
  deleteIfExists(tmpEnvironmentsData)
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
                  reject(new Error('Failed to create JS table: ' + err))
                })
            })
            .catch((err) => {
              cleanup()
              reject(new Error('Failed to create HTML table: ' + err))
            })
        }
      }).catch((err) => {
        reject(new Error(err))
      })
    })
      .catch((err) => {
        reject(new Error(err))
      })
  })
}
