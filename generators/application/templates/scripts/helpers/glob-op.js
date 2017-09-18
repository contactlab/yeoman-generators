/**
 * Execute an operations on a files list generated from a glob. Works with Promises.
 * @module scripts/helpers/glob-op
 */

/*eslint-env node*/

const path  = require('path');
const glob  = require('glob');
const pify  = require('pify');
const globy = pify(glob);

const toDest = (dest, src) =>
  path.join(dest, path.basename(src));

const app = ([op, ...args]) =>
  op(...args);

const appSeq = (seq, op) =>
  seq.concat(app(op));

const globOp = fn => (src, dest) =>
  globy(src)
    .then(files =>
      files
        .map(f => [fn, f, toDest(dest, f)])
        .reduce(appSeq, [])
    )
    .then(s => Promise.all(s));

module.exports = globOp;
