'use strict'

import test from 'ava'
import travisInit from './..'

test('Return error message when no options is passed', async t => {
  const err = await travisInit().catch(err => err)
  t.is(err, 'Options should contain language and versions')
})

test('Return error message when no versions is not passed', async t => {
  const opts = {language: 'ruby', versions: undefined}
  const err = await travisInit(opts).catch(err => err)
  t.is(err, 'Versions should be an array containing the versions needed')
})

test('Return error message when no language is not supported', async t => {
  const opts = {language: 'ruby', versions: ['1']}
  const err = await travisInit(opts).catch(err => err)
  t.is(err, 'ruby not supported')
})

test('Return error message when no version is not supported', async t => {
  const opts = {language: 'node_js', versions: ['9']}
  const err = await travisInit(opts).catch(err => err)
  t.is(err, 'Version 9 is not supported')
})
