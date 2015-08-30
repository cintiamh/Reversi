var gulp = require('gulp');

gulp.task('production', ['karma'], function() {
    gulp.start(['markup', 'images', 'minifyCss', 'uglifyJs']);
});