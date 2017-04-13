'use strict';

const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');

module.exports = class extends Generator {

  start(){
    this.log(yosay(
      'Welcome to the kickass ' + chalk.red('Contactlab') + ' generator!'
    ));

    this.log(
      'Please use one of the availables templates to generate something...'
    );
  }

};