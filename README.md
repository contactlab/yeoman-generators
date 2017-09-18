# generator-contactlab

```yo contactlab```

A set of generators based on [Yeoman](http://yeoman.io/) for Contactlab applications development workflow.

### Install
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

### Generators

```sh
$ yo contactlab:element
```

Create a Polymer (v1) Web Component written in ES2015 syntax.


```sh
$ yo contactlab:element-standard
```

Create a custom element following the Web Component v1 specification.


```sh
$ yo contactlab:element-next
```

*[WORK IN PROGRESS]* Create a Polymer (v3) Web Component, with its owns:

- HTML `template`
- Javascript `class` extending PolymerElement
- `properties` object file
- starter files for internal & public `methods`
- a .postcss file to be compiled for `styles`
- AVA.js `unit test` starter


```sh
$ yo contactlab:readme
```

Create a ```readme.md``` file with a template for Contactlab projects.


```sh
$ yo contactlab:application
```

*[WORK IN PROGRESS]* Create the default folder structure for a Contactlab web app project, it will ask for:
- application name
- Bugsnag API key
- OneSky App API key, secret and project id

Packages included:
- Polymer v3.0
- ContactLab UI Components
- Redux + polymer-redux
- Contactsnag
- Saray
- Router5 + helpers & redux-router5

### License

Released under the [Apache 2.0](LICENSE) license.