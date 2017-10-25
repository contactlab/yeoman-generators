/*eslint-env node*/

const path = require('path');

const root = path.resolve(__dirname, '../..');

module.exports = {
  ROOT           : root,
  MODULES        : path.join(root, 'node_modules'),
  BOWER          : path.join(root, 'bower_components'),
  SRC            : path.join(root, 'src'),
  VENDOR         : path.join(root, 'src/vendor'),
  DIST           : path.join(root, 'dist'),
  BIN            : path.join(root, '.bin'),
  E2E_REPORTS    : path.join(root, 'test/e2e/reports'),
  E2E_SCREENSHOTS: path.join(root, 'test/e2e/screenshots'),
};
