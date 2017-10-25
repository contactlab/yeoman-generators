/*eslint-env node*/

const path                     = require('path');
const fs                       = require('fs-extra');
const copyGlob                 = require('./helpers/glob-op')(fs.copy);
const {start, succeed, error}  = require('./helpers/pipeline');
const {MODULES, BOWER, VENDOR} = require('./helpers/folders');

module.exports = () =>
  start('Copying resources in vendor')
    .then(() => fs.ensureSymlink(MODULES, BOWER))
    .then(() => copyGlob(
      path.join(MODULES, 'contactlab-ui-components/assets/+(css|fonts)'),
      path.join(VENDOR, 'contactlab-ui-components/assets')
    ))
    .then(() => copyGlob(
      path.join(MODULES, 'ikonograph/+(dist|fonts)'),
      path.join(VENDOR, 'ikonograph')
    ))
    .then(() => copyGlob(
      path.join(MODULES, '@webcomponents/webcomponentsjs/*.js*'),
      path.join(VENDOR, 'webcomponentsjs')
    ))
    .then(() => copyGlob(
      path.join(MODULES, 'web-animations-js/*.js*'),
      path.join(VENDOR, 'web-animations-js')
    ))
    .then(succeed('Vendor resources copied'))
    .catch(error);
