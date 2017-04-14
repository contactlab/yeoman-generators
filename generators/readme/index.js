'use strict';

const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');

module.exports = class extends Generator {

  start(){
    this.log(yosay(
      'Welcome to the kickass ' + chalk.red('Contactlab README') + ' generator!'
    ));
  }

  prompts(){
    const prompts = [{
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of this project?',
      default: 'My new project'
    }, {
      type: 'confirm',
      name: 'license',
      message: 'Do you need to include the Apache 2.0 license (for open source proejcts)?',
      default: true
    }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
      const date = new Date();
      this.props.year = date.getFullYear();
    });
  }

  create(){

    this.fs.copyTpl(
      this.templatePath('readme.md'),
      this.destinationPath('readme.md'),
      this.props
    );

    this.props.license ? this.fs.copyTpl(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE'),
      this.props
    ) : null;
  }

};