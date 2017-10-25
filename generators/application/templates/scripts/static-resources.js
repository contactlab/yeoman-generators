/*eslint-env node*/

const path                    = require('path');
const fs                      = require('fs-extra');
const {start, succeed, error} = require('./helpers/pipeline');
const {SRC, DIST}             = require('./helpers/folders');

const RESOURCES   = ['index.html', 'i18n', 'assets', 'vendor', 'manifest.json'];

const toDist = a =>
  fs.copy(path.join(SRC, a), path.join(DIST, a));

module.exports = () =>
  start('Copying static resources')
    .then(() => Promise.all(RESOURCES.map(toDist)))
    .then(succeed('Static resources copied'))
    .catch(error);
