
var gulp   = require('gulp');
var plugins = require('gulp-load-plugins')();

var plumberConf = {};

if (process.env.CI) {
  plumberConf.errorHandler = function(err) {
    throw err;
  };
}

gulp.task('test', function () {
  gulp.src(['test/**/*.js', '!test/temp-test/**'], {cwd: __dirname})
    .pipe(plugins.plumber(plumberConf))
    .pipe(plugins.mocha({ reporter: 'spec' }));
});
