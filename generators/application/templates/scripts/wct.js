/*eslint-env node*/

const path                    = require('path');
const fs                      = require('fs-extra');
const {start, succeed, error} = require('./helpers/pipeline');
const {MODULES}               = require('./helpers/folders');

const symSinon = path.join(MODULES, 'sinonjs/sinon.js');
const symAsync = path.join(MODULES, 'async/lib/async.js');

module.exports = () =>
  start('Preparing WCT playground')
    .then(() => fs.remove(symSinon))
    .then(() => fs.ensureSymlink(
      path.join(MODULES, 'sinon/pkg/sinon.js'),
      symSinon
    ))
    .then(() => fs.remove(symAsync))
    .then(() => fs.ensureSymlink(
      path.join(MODULES, 'async/dist/async.js'),
      symAsync
    ))
    .then(succeed('WCT prepared'))
    .catch(error);
