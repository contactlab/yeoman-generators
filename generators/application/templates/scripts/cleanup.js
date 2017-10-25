/*eslint-env node*/

const fs                      = require('fs-extra');
const {start, succeed, error} = require('./helpers/pipeline');

const {
  BOWER,
  VENDOR,
  DIST,
  BIN,
  E2E_REPORTS,
  E2E_SCREENSHOTS
} = require('./helpers/folders');

module.exports = () =>
  start('Cleaning up')
    .then(() => fs.remove(BOWER))
    .then(() => fs.remove(VENDOR))
    .then(() => fs.remove(DIST))
    .then(() => fs.remove(BIN))
    .then(() => fs.remove(E2E_REPORTS))
    .then(() => fs.remove(E2E_SCREENSHOTS))
    .then(succeed('Project cleaned up'))
    .catch(error);
