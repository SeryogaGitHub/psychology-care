const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');

module.exports = function imageMinify() {
  return gulp.src(
    ['dev/img/**/*.{gif,png,jpg,svg,webp}']
  )
    .pipe(buffer())
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({
        quality: 70,
        progressive: true
      }),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest('dist/img/'))
};
