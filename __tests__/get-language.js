'use strict'

import test from 'ava'
import getLanguage from './../lib/get-language'

test('should return the language passed', t => {
  const res = getLanguage('ruby')

  t.falsy(res)
})

test('should return node_js', t => {
  const res = getLanguage()

  t.is(res, 'node_js')
})
