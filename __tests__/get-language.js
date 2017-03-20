'use strict'

import test from 'ava'
import getLanguage from './../lib/get-language'

test('retun false to the languages not supported', t => {
  const res = getLanguage('ruby')
  t.falsy(res)
})

test('should return node_js', t => {
  const res = getLanguage('node_js')
  t.is(res, 'node_js')
})
