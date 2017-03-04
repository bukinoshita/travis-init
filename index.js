'use strict'

const fs = require('fs')
const getLanguage = require('./lib/get-language')
const getVersion = require('./lib/get-version')
const fileTemplate = require('./lib/file-template')

const travisInit = (language = undefined, version = undefined) => {
  return new Promise((resolve, reject) => {
    const selectedLanguage = getLanguage(language)
    const selectedVersion = getVersion(version)
    const travis = fileTemplate(selectedLanguage, selectedVersion)

    try {
      fs.writeFileSync('.travis.yml', travis)
      resolve('.travis.yml created')
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = travisInit
