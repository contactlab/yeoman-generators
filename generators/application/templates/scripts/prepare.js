#!/usr/bin/env node

/*eslint-env node*/

const cleanup                 = require('./cleanup');
const wct                     = require('./wct');
const copy                    = require('./copy');
const staticResources         = require('./static-resources');
const {start, succeed, error} = require('./helpers/pipeline');

start('Preparing project')
  .then(cleanup)
  .then(wct)
  .then(copy)
  .then(staticResources)
  .then(succeed('Project prepared'))
  .catch(error);
