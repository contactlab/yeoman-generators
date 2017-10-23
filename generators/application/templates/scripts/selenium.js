/*eslint-env node*/

const selenium                = require('selenium-download');
const {start, succeed, error} = require('./helpers/pipeline');
const {BIN}                   = require('./helpers/folders');

const ensure = () =>
  new Promise((resolve, reject) => selenium.ensure(BIN, err =>
    err ? reject(err) : resolve(true)
  ));

start('Checking Selenium bin')
  .then(ensure)
  .then(succeed(`Selenium & Chromedriver downloaded to: ${BIN}`))
  .catch(error);
