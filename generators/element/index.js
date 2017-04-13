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
      'Welcome to the kickass ' + chalk.red('Contactlab ELEMENT') + ' generator!'
    ));
  }

  prompts(){
    const prompts = [{
      type: 'input',
      name: 'elementName',
      message: 'What would you like this element to be called?',
      default: 'clab-element'
    }, {
      type: 'confirm',
      name: 'npmWrapper',
      message: 'Are you using the "polymer-npm-wrapper" package?',
      default: true
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

};