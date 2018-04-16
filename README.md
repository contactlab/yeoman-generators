# generator-contactlab - :warning: Deprecated

```yo contactlab```

A set of generators based on [Yeoman](http://yeoman.io/) for Contactlab applications development workflow.

## Install
First install Yeoman globally

```sh
$ npm install -g yo

#--- or ---

$ yarn global add yo
```

then you can install the generator

```sh
$ npm install -g generator-contactlab

# --- or ---

$ yarn global add generator-contactlab
```

## Generators

### Element

```sh
$ yo contactlab:element
```

Create a Polymer (v3) Web Component, with its owns:

- HTML `template`
- Javascript `class` extending PolymerElement
- `properties` object file
- starter files for internal & public `methods`
- a .postcss file to be compiled for `styles`
- AVA.js `unit test` starter

### Custom Element

```sh
$ yo contactlab:custom-element
```

Create a custom element following the Web Component v1 specification.

### Application

```sh
$ yo contactlab:application
```

Create the default folder structure for a Contactlab web app project, with build and transpilation (*Webpack* + *Babel*)

It will ask for:
- application name
- Capistrano scripts directory
- Saray root path
- Bugsnag API key
- OneSky App API key, secret and project id

Packages included:
- Polymer v3.0
- ContactLab UI Components
- Redux + polymer-redux
- Contactsnag
- Saray
- Router5 + helpers & redux-router5
- AVA
- WCT
- Nightwatch + Cucumber

## License

Released under the [Apache 2.0](LICENSE) license.
