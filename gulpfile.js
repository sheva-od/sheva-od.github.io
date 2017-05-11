var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('pug', function(){
  return gulp.src('*.pug')
    .pipe(pug())
    .pipe(gulp.dest(''))
});

gulp.task('sass', function () {
  return gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
  gulp.watch(['*.scss'], ['sass']);
  gulp.watch(['*.pug'], ['pug']);
});

gulp.task('default', [ 'pug', 'sass' ]);
