/*eslint-env node*/

const fs                      = require('fs-extra');
const {start, succeed, error} = require('./helpers/pipeline');
const {VENDOR, DIST}          = require('./helpers/folders');

module.exports = () =>
  start('Cleaning up')
    .then(() => fs.remove(VENDOR))
    .then(() => fs.remove(DIST))
    .then(succeed('Project cleaned up'))
    .catch(error);
