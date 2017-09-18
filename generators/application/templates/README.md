# <%= appName %>

<!-- Description here -->

## Requirements

- Node >= v6.x
- Yarn >= v1.0


## Installation & start

Clone this repo on your machine and on project root launch:

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

# Runs tests (after linting)
$ yarn test
$ yarn wct

# Build commands
$ yarn build # Development build
$ yarn build:dev # Alias for development
$ yarn build:staging # Staging build
$ yarn build:production # Production build

# Runs http-server on localhost:8180
$ yarn start

# Runs webpack-dev-server on localhost:8180
$ yarn server

# Runs Saray server on localhost:3000
$ yarn saray

# Runs development server (webpack-dev-server + saray)
$ yarn dev

# Download or upload i18n files from/to OneSky App
$ yarn onesky:download
$ yarn onesky:upload
```