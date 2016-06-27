/*global require console*/

var gulp = require('gulp');
var check = require('check-pages');
var connect = require('gulp-connect');

gulp.task('webserver', function() {
  connect.server({
  root: './',
  port: 8888,
  livereload: false
  });
});

gulp.task('default', ['webserver', 'runcheck'], function() {

  connect.serverClose();
});

gulp.task('runcheck', function(callback) {
  var options = {
  pageUrls: [
  'http://localhost:8888/'
  ],
  checkLinks: true,
  maxResponseTime: 500
  };
  check(console, options, callback);
});
