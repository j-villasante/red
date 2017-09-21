let gulp = require('gulp');
let sass = require('gulp-sass');
let header = require('gulp-header');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');

gulp.task('material-css', function () {
  return gulp.src('./node_modules/materialize-css/sass/materialize.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('material-fonts', function () {
  return gulp.src('./node_modules/materialize-css/dist/fonts/**/*')
    .pipe(gulp.dest('./www/fonts/'))
});

gulp.task('material', ['material-fonts', 'material-css']);
