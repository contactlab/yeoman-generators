'use strict';

const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = class extends Generator {

  start(){
    this.log(yosay(
      'Welcome to the kickass ' + chalk.red('Contactlab APPLICATION') + ' generator!'
    ));
  }

  prompts(){
    const prompts = [{
      type: 'input',
      name: 'appName',
      message: 'What would you like this application to be called?',
      default: 'clab-application'
    },{
      type: 'input',
      name: 'bugsnag',
      message: 'Insert Bugsnag API KEY',
      default: ''
    },{
      type: 'input',
      name: 'onesky',
      message: 'Insert OneSkyApp API KEY',
      default: ''
    },{
      type: 'confirm',
      name: 'prototype',
      message: 'Is this a prototype?',
      default: false
    },{
      type: 'confirm',
      name: 'globalCss',
      message: 'Does this project require global CSS?',
      default: false
    }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
      const temp = this.props.elementName.replace(/-([a-z])/g, (g) => {
        return g[1].toUpperCase();
      });
      this.props.elementNameCamel = capitalizeFirstLetter(temp);
    });
  }

  create(){
    const elementName = this.props.elementName;

    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(elementName),
      this.props
    );
  }

  dependencies(){
    this.npmInstall();
  }

};