'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

var deps = [
  [helpers.createDummyGenerator(), 'karma']
];

describe('js-lib:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, './temp-test'))
      .withOptions({ 'skip-install': true })
      .withGenerators(deps)
      .withPrompts({
        testFramework: "jasmine",
        browsers: ['Chrome'],
      })
      .on('end', done);
  });

  it('should create project files', function () {
    assert.file([
      'gulpfile.js',
      'karma.conf.js'
    ]);
    assert.fileContent([
      ['karma.conf.js', 'frameworks: [\'jasmine\', \'browserify\']'],
      ['karma.conf.js', 'browsers: [\'Chrome\']']
    ])
  });
});
