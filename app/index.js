'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('underscore');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
  },

  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the supreme ' + chalk.red('Karma') + ' generator!'
    ));

    this.allTestFrameworks = ['jasmine', 'mocha'];
    this.allBrowsers = ['Chrome', 'PhantomJS'];
    var prompts = [
      {
        type: 'list',
        name: 'testFramework',
        message: 'Your test framework in karma',
        choices: this.allTestFrameworks,
        default: 'jasmine'
      },
      {
        type: 'checkbox',
        name: 'browsers',
        message: 'Which browser you need to use for test',
        choices: this.allBrowsers,
        default: ['PhantomJS']
      }
    ];

    this.prompt(prompts, function (props) {
      this.testFramework = props.testFramework;
      console.log('testFramework: ' + this.testFramework);
      this.browsers = props.browsers;
      console.log('browsers: ' + JSON.stringify(this.browsers));
      this.browsersRepr = '[' + this.browsers.map(function(browser) {
        return '\'' + browser + '\'';
      }).join(', ') + ']';
      console.log(this.browsersRepr + '.');
      done();
    }.bind(this));
  },

  writing: {
    configFile: function() {
      this.template('_gulpfile.js', 'gulpfile.js');
      this.template('spec/_karma.conf.js', 'spec/karma.conf.js');
      this.template('spec/_sample.js', 'spec/sample.js');
    },
    packageFile: function() {
      var pkg = JSON.parse(this.read('_package.json'));
      var self = this;
      var omitPackages = [];

      var omitTestFrameworks =  _.reject(this.allTestFrameworks, function(obj) {
        console.log('reject: ' + (obj === self.testFramework));
        return obj === self.testFramework;
      });
      omitTestFrameworks = _.map(omitTestFrameworks, function(name) {
        return 'karma-' + name.toLowerCase();
      });

      var omitBrowsers = _.reject(this.allBrowsers, function(name) {
        return self.browsers.indexOf(name) != -1;
      });
      omitBrowsers = _.map(omitBrowsers, function(name) {
        return 'karma-' + name.toLowerCase() + '-launcher';
      });
      omitPackages = omitPackages.concat(omitTestFrameworks, omitBrowsers);
      pkg.devDependencies = _.omit(pkg.devDependencies, omitPackages);
      console.log(process.cwd());
      this.write('package.json', JSON.stringify(pkg, null, 2));
    },
  },

  install: function() {
    this.installDependencies({
      bower: false,
      skipInstall: this.options['skip-install']
    });
  },

});
