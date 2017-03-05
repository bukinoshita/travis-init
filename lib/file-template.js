'use strict'

const fileTemplate = (language, versions) => {
  let config = `language: ${language}\n${language}:\n`
  versions.map(v => {
    config += `  - ${v}\n`
    return v
  })

  return config
}

module.exports = fileTemplate
