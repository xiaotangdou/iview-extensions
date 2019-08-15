/* eslint-disable no-undef */

const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const scss = require('gulp-sass')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

// compile scss
gulp.task('css', function() {
  gulp
    .src('../src/styles/main.scss')
    .pipe(scss())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions', 'ie > 8']
      })
    )
    .pipe(cleanCSS())
    .pipe(rename('iview-extensions.css'))
    .pipe(gulp.dest('../iview-extensions/styles'))
})

// Copy font file
gulp.task('fonts', function() {
  gulp
    .src('../src/styles/iconfont/fonts/*.*')
    .pipe(gulp.dest('../iview-extensions/styles/fonts'))
})

gulp.task('default', ['css', 'fonts'])
