'use strict'

import test from 'ava'
import travisInit from './..'

test('should return a successful message', async t => {
  const res = await travisInit().then(res => res)
  t.is(res, '.travis.yml created')
})
