'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

var deps = [
  [helpers.createDummyGenerator(), 'karma']
];

describe('js-lib:app', function () {
  beforeEach(function(done) {
    var testDir = path.join(__dirname, './temp-test');
    helpers.testDirectory(testDir, function() {
      console.log(process.cwd());
      helpers.run(path.join(__dirname, '../app'))
        .inDir(testDir)
        .withOptions({ 'skip-install': true })
        .withGenerators(deps)
        .withPrompts({
          testFramework: "",
          browsers: [],
        })
        .on('end', done);
    });
  });

  it('should create project files', function () {
    assert.file([
      'gulpfile.js',
      'karma.conf.js'
    ]);
    assert.fileContent([
      ['karma.conf.js', 'frameworks: [\'jasmine\', \'browserify\']'],
      ['karma.conf.js', 'browsers: []']
    ]);
  });
});
