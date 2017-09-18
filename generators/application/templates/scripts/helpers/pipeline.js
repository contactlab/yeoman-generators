/**
 * Methods for showing spinner and messages in console.
 * @module scripts/helpers/pipeline
 */

/*eslint-env node*/

const spinner = require('ora')();

const start = spinner => msg =>
  Promise.resolve(spinner.start(msg));

const succeed = spinner => msg =>
  () => spinner.succeed(msg);

const error = spinner => e => {
  spinner.fail(e.message);

  process.exitCode = 1;
};

module.exports = {
  start  : start(spinner),
  succeed: succeed(spinner),
  errore : error(spinner)
};
