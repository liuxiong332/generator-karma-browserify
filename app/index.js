'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var fs = require('fs');
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
        default: 'PhantomJS'
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
      done();
    }.bind(this));
  },

  writing: function() {
    this.template('_gulpfile.js', 'gulpfile.js');
    this.template('_karma.conf.js', 'karma.conf.js');
  },

  dependency: function() {
    var cb = this.async();

    var pkg = JSON.parse(this.read('_package.json'));
    if(fs.existsSync('package.json')) {
      var curPkg = JSON.parse(fs.readFileSync('package.json'));
      curPkg = _.extend(curPkg, _.omit(pkg, 'devDependencies'));
      fs.writeFileSync('package.json', JSON.stringify(curPkg));
    }
    var self = this;
    var omitPackages = [];
    var omitTestFrameworks =  _.reject(this.allTestFrameworks, function(obj) {
      console.log('reject: ' + (obj === self.testFramework));
      return obj === self.testFramework;
    });
    var omitBrowsers = _.reject(this.allBrowsers, function(name) {
      return self.browsers.indexOf(name) != -1;
    });
    omitPackages = omitPackages.concat(omitTestFrameworks, omitBrowsers);

    pkg.devDependencies = _.omit(pkg.devDependencies, omitPackages);
    console.log(pkg.devDependencies);

    this.npmInstall(pkg.devDependencies, {'--save-dev': true}, cb);
  },

});
