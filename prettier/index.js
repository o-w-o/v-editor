#!/usr/bin/env node
const opts = require('minimist')(process.argv.slice(2))

const VfilePrettier = require('./src/lib')
const app = require('./src/app')

const output = app(opts, () => new VfilePrettier(opts))

if (typeof output === 'string') {
  console.log(output)
}
