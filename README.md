# generator-contactlab
```yo contactlab```

A set of generators based on [Yeoman](http://yeoman.io/) for Contactlab applications development workflow.

### Install
First install Yeoman globally

```
$ npm install -g yo
--- or ---
$ yarn global add yo
```

then you can install the generator

```
$ npm install -g generator-contactlab
--- or ---
$ yarn global add generator-contactlab
```

### Generators
```
$ yo contactlab:element
```
Create a Polymer (v1) Web Component written in ES2015 syntax.

```
$ yo contactlab:element-standard
```
Create a custom element following the Web Component v1 specification.


```
$ yo contactlab:element-v2
```
*[Work in progress]* Create a Polymer (v3) Web Component, with its owns:

- HTML template
- Javascript class extending PolymerElement
- properties object file
- starter files for internal & public methods
- AVA.js unit test starter

```
$ yo contactlab:readme
```
Create a ```readme.md``` file with a template for Contactlab projects.

<!--```
$ yo contactlab:application
```
Create the default folder structure for a Contactlab web app project, it will ask for:
- application name
- Bugsnag API key
- if you want to build a prototype

for more details about this generator check the related section.

### Difference between prototype and application

If you choose to create a **prototype** project, the authentication component will be ignored and the client-side routing will be handled by ```app-route``` instead of ```router5```.

### Application generator details
Folder structure:

```
| application
|- src
|-- components
|-- modules
|-- assets
|--- css
|--- img
|--- fonts
|- deploy-utils
|- sh-utils
```

Packages included:
- Redux
- Polymer (NPM wrapper) and polymer-redux
- Polyfills for Fetch API and Promises
- Contactsnag
- Kubozer
- Saray
- Polyfills for Fetch API and Promises-->


### License
Released under the [Apache 2.0](LICENSE) license.