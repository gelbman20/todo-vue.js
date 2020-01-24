var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
let _baseDir = './';
let _htmlDir = `${_baseDir}*.html`;
let _jsDir = `${_baseDir}js/*.js`;
let _cssDir = `${_baseDir}css/*.css`;
let watchDir = [_htmlDir, _jsDir, _cssDir];

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch(watchDir).on('change', browserSync.reload)
});