'use strict'

import test from 'ava'
import getVersion from './../lib/get-version'

test('should return the version passed', t => {
  const res = getVersion(undefined, '4')
  t.is(res, '4')
})

test('should return the version 6', t => {
  const res = getVersion()
  t.is(res, 6)
})
