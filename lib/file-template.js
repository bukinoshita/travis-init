'use strict'

const fileTemplate = (language, ...version) => {
  let config = `language: ${language}\n${language}:\n`
  version.map(v => {
    config += `  - ${v}\n`
    return v
  })

  return config
}

module.exports = fileTemplate
