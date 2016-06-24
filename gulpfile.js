var gulp = require('gulp');
var check = require('check-pages');
var server = require('gulp-webserver');


gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
    livereload: true,
    directoryListing: true,
    open: true
    }));
});

gulp.task('default', ['webserver', 'runcheck'], function() {});

gulp.task('runcheck', function(callback) {
  var options = {
  pageUrls: [
  'http://localhost:8000/index.html'
  ],
  checkLinks: true,
  maxResponseTime: 500
  };
  check(console, options, callback);
});
