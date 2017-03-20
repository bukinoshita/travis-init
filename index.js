'use strict'

const fs = require('fs')
const getLanguage = require('./lib/get-language')
const getVersion = require('./lib/get-version')
const fileTemplate = require('./lib/file-template')

const travisInit = opts => {
  return new Promise((resolve, reject) => {
    if (!opts) {
      reject('Options should contain language and versions')
      return
    }

    const {language, versions} = opts

    if (typeof versions !== 'object') {
      reject('Versions should be an array containing the versions needed')
      return
    }

    const selectedLanguage = getLanguage(language)
    const selectedVersion = getVersion(language, versions)

    if (!selectedLanguage) {
      reject(`${language} not supported`)
      return
    }

    if (selectedVersion.length > 0) {
      reject(`Version ${selectedVersion[0]} is not supported`)
      return
    }

    const travis = fileTemplate(selectedLanguage, versions)

    try {
      fs.writeFileSync('.travis.yml', travis)
      resolve('.travis.yml created')
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = travisInit
