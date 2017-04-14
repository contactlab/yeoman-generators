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
$ yo contactlab:element-v2
```
*[Work in progress]* Create a Polymer (v2) Web Component, with its owns:

- HTML template
- Javascript class extending Polymer.Element
- localization files (it & en)
<!--- component related services file-->
- WCT test
- TBD JS test
<!--- component docs page-->

<!--```
$ yo contactlab:application
```
Create the default folder structure for a Contactlab web app project.-->

```
$ yo contactlab:readme
```
Create a ```readme.md``` file with a template for Contactlab projects.


### License
Released under the [Apache 2.0](LICENSE) license.