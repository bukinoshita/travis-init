'use strict'

const verifyLanguage = require('./verify-language')
const support = require('./../support.json')

const getVersion = (language, versions) => {
  if (verifyLanguage(language)) {
    const checker = versions.filter(version => {
      if (!support[language].versions.includes(version)) {
        return version
      }
    })

    return checker
  }
}

module.exports = getVersion
