'use strict'

const verifyLanguage = require('./verify-language')

const getLanguage = (language = 'node_js') => {
  if (verifyLanguage(language)) {
    return language
  }

  return false
}

module.exports = getLanguage
