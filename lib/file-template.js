'use strict'

const fileTemplate = (language, version) => (
`language: ${language}
${language}:
  - ${version}
`)

module.exports = fileTemplate
