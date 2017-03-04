'use strict'

const verifyLanguage = require('./verify-language')
const support = require('./../support.json')

const getVersion = (language = 'node_js', version = 6) => {
  if (verifyLanguage(language)) {
    const versionString = version.toString()

    if (support[language].versions.includes(versionString)) {
      return version
    }

    return false
  }

  return false
}

module.exports = getVersion
