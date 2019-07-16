var gulp = require('gulp'),
    browserSync = require('browser-sync'), 
    stylus = require('gulp-stylus');

exports.default = function() {
    browserSync.init({
        server: '.'
    });

    gulp.watch('index.html').on('change', browserSync.reload);
    gulp.watch('styles.styl').on('change', function() {
        gulp.src('styles.styl')
            .pipe(stylus())
            .pipe(gulp.dest('./dist'))
            .on('end', browserSync.reload);
    });
};
