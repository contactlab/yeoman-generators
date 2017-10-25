# <%= appName %>

<!-- Description here -->

## Requirements

- Node >= v6.x
- Yarn >= v1.1 | NPM >= v5.0

## Installation & start

```sh
$ yarn install
```

## Available tasks

```sh
# Prepare project (see scripts/prepare.js)
$ yarn prepare

# Run webpack
$ yarn webpack

# Lint with ESLint
$ yarn lint

# Runs tests (after Flow and Lint)
$ yarn test

# Runs E2E tests
$ NODE_ENV=staging yarn e2e

# Build commands
$ yarn build # Development build
$ yarn build:dev # Alias for development
$ yarn build:staging # Staging build
$ yarn build:production # Production build

# Runs http-server on port 8180
$ yarn start

# Runs Webpack dev server
$ yarn server

# Runs Saray server
$ yarn saray

# Runs development server (Webpack dev server + saray)
$ yarn dev

# Bumps version. Allowed types are: patch, minor, major, prepatch, preminor, premajor, prerelease
$ yarn bump [type]

# Download or upload i18n files from/to OneSky App
$ yarn onesky:download
$ yarn onesky:upload
```