/*eslint-env node*/

const path     = require('path');
const semver   = require('semver');
const fs       = require('fs-extra');
const Either   = require('data.either');
const contains = require('ramda/src/contains');
const lensProp = require('ramda/src/lensProp');
const nth      = require('ramda/src/nth');
const over     = require('ramda/src/over');

const {start, succeed, error} = require('./helpers/pipeline');
const {ROOT, SRC} = require('./helpers/folders');

const FILES = [path.join(SRC, 'manifest.json'), path.join(ROOT, 'package.json')];
const TYPES = ['patch', 'minor', 'major', 'prepatch', 'preminor', 'premajor', 'prerelease'];

const undef = () =>
  new Error('Version is not defined');

const notAvailable = v =>
  new Error(`The version "${v}" is not available`);

const atLeast3 = xs =>
  xs.length > 2 ? Either.Right(xs) : Either.Left(undef());

const valid = v =>
  contains(v, TYPES) ? Either.Right(v) : Either.Left(notAvailable(v));

const version = argv =>
  atLeast3(argv)
    .map(nth(2))
    .chain(valid)
    .fold(e => Promise.reject(e), v => Promise.resolve(v));

const updateVersion = v => o =>
  over(lensProp('version'), x => semver.inc(x, v), o);

const toJSON = f => c =>
  fs.writeJSON(f, c, {spaces: 2});

const bump = v => f =>
  fs.readJSON(f)
    .then(updateVersion(v))
    .then(toJSON(f));

// Run the command
start('Bumpimg version in package.json and manifest.json')
  .then(() => version(process.argv))
  .then(v => Promise.all(FILES.map(bump(v))))
  .then(succeed('Version bumped'))
  .catch(error);
