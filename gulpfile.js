var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('pug', function(){
  return gulp.src('app/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('app/'))
});

gulp.task('sass', function () {
  return gulp.src('app/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/'));
});

gulp.task('watch', function() {
  gulp.watch(['app/*.scss'], ['sass']);
  gulp.watch(['app/*.pug'], ['pug']);
  gulp.watch(['app/*.coffee'], ['coffee']);
});

gulp.task('default', [ 'pug', 'sass' ]);