'use strict'

import test from 'ava'
import getVersion from './../lib/get-version'

test('if versions passed supported, return an empty array', t => {
  const res = getVersion('node_js', ['4'])
  t.true(res.length === 0)
})

test('if versions passed are not supported, return an array with un-supported versions', t => {
  const res = getVersion('node_js', ['6', 'iojs', '9'])
  t.true(res.length === 1)
  t.true(res[0] === '9')
})
