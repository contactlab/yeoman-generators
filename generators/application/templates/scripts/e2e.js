/*eslint-env node*/

const propOr    = require('ramda/src/propOr');
const compose   = require('ramda/src/compose');
const npmRunAll = require('npm-run-all');

const BEFORE      = ['build'];
const NPM_SCRIPTS = ['httpserver', 'nw'];

const opts = (parallel = false) => ({
  parallel,
  printName: true,
  race     : parallel,
  stdin    : process.stdin,
  stdout   : process.stdout,
  stderr   : process.stderr
});

const results = xs =>
  xs.map(x => x.code)
    .filter(x => typeof x !== 'undefined' && x !== null)
    .reduce((a, x) => x > 0 ? x : a, 0);

const error = propOr(0, 'code');

const exit = code => {
  process.exitCode = code;
};

const errorAndExit = compose(exit, error);

// --- Run scripts
npmRunAll(BEFORE, opts())
  .then(() =>
    npmRunAll(NPM_SCRIPTS, opts(true))
  )
  .then(results, error)
  .then(exit)
  .catch(errorAndExit);
