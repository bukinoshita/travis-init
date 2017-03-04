'use strict'

const support = require('./../support.json')

const verifyLanguage = language => {
  return Object.prototype.hasOwnProperty.call(support, language)
}

module.exports = verifyLanguage
