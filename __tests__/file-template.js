'use strict'

import test from 'ava'
import fileTemplate from './../lib/file-template'

test('should return the file template', t => {
  const res = fileTemplate('node_js', ['6'])
  const expected = (
`language: node_js
node_js:
  - 6
`)

  t.is(res, expected)
})
