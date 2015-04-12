'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');


describe('js-lib:app', function () {
  beforeEach(function(done) {
    var testDir = path.resolve(__dirname, './temp');
    helpers.run(path.resolve(__dirname, '../app'))
      .inDir(testDir)
      .withOptions({ 'skip-install': true })
      .withPrompt({
        testFramework: 'jasmine',
        browsers: ['PhantomJS'],
      })
      .on('end', done);
  });

  it('should create project files', function () {
    assert.file([
      'gulpfile.js',
      'spec/karma.conf.js'
    ]);
    assert.fileContent([
      ['spec/karma.conf.js', 'frameworks: [\'jasmine\', \'browserify\']'],
      ['spec/karma.conf.js', 'browsers: [\'PhantomJS\']']
    ]);
  });
});
