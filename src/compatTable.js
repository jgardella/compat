let fs = require('fs')
let request = require('request-promise-native')
let compatTable

try {
  compatTable = require('../data/compatTable.json')
} catch (e) {
  console.log(e)
  if (e.code === 'MODULE_NOT_FOUND') {
    compatTable = undefined
  }
}

const API_URL = 'http://localhost:8080'

/**
 * Checks whether the provided feature is supported by the provided environment.
 * @param string feature type of feature
 * @param string env id of environment
 * @return support value for the feature
 */
exports.featureSupportedByEnv = (feature, env) => {
  if (compatTable[feature][env] === undefined) {
    return false
  }
  return compatTable[feature][env]
}

/**
 * Checks whether the provided feature is defined in the compatibility table.
 * @param string feature type of feature
 * @return boolean true if feature is defined in table, false otherwise
 */
exports.featureDefined = (feature) => {
  return compatTable[feature] !== undefined
}

exports.tableLoaded = () => {
  return compatTable !== undefined
}

exports.getVersion = () => {
  if (compatTable !== undefined) {
    return compatTable.meta.version
  }
  return 0
}

function writeTable (tableString) {
  fs.writeFileSync('../data/compatTable.json', tableString)
  compatTable = require('../data/compatTable.json')
}

const LOAD_TABLE_RESULT = {
  UP_TO_DATE: 0,
  FAILED_OLD_TABLE: 1,
  SUCCESS: 2
}

exports.LOAD_TABLE_RESULT = LOAD_TABLE_RESULT

/**
 * Tries to update the compatibility table if it isn't already up to date.
 */
/* eslint-disable handle-callback-err */
exports.loadUpdatedTable = () => {
  return new Promise((resolve, reject) => {
    if (compatTable === undefined) {
      const newTable = request.get(API_URL + '/loadTable')
      newTable.then((tableValue) => {
        writeTable(tableValue)
        resolve(LOAD_TABLE_RESULT.SUCCESS)
      }).catch((err) => {
        /* loading new table, table is still undefined */
        reject(LOAD_TABLE_RESULT.FAILED_NO_TABLE)
      })
    } else {
      const currentVersion = request.get(API_URL + '/currentVersion')
      currentVersion.then((versionValue) => {
        if (versionValue > compatTable.meta.version) {
          const newTable = request.get(API_URL + '/loadTable')
          newTable.then((tableValue) => {
            writeTable(tableValue)
            /* succesfully loaded new version of table */
            resolve(LOAD_TABLE_RESULT.SUCCESS)
          }).catch((err) => {
            /* failed to load new version of table, but have hold version still */
            resolve(err)
          })
        } else {
          /* table is up to date */
          resolve(LOAD_TABLE_RESULT.UP_TO_DATE)
        }
      }).catch((err) => {
        /* failed to get latest version number, but have old version of table still */
        resolve(LOAD_TABLE_RESULT.FAILED_OLD_TABLE)
      })
    }
  })
}
/* eslint-disable handle-callback-err */
