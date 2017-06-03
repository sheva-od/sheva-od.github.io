'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('default', ['sass']);
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
		.pipe(livereload());
});
 
gulp.task('watch', ['sass'], function() {
	livereload.listen();
  gulp.watch(['./sass/*.scss'], ['sass']);
});