'use strict'

const fileTemplate=(language, version) => {
	var config = `language: ${language}\n${language}:\n`
	for (let i = 0; i < version.length; i++) {
		config += `  - "${version[i]}"\n`
	}

	return config
}

module.exports = fileTemplate
