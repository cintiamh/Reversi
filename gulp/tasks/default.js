var gulp = require('gulp');

gulp.task('default', [], function() {
    gulp.start('sass', 'images', 'markup', 'watch');
});