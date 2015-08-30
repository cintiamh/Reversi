var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var size = require('gulp-filesize');
var config = require('../config').production;

gulp.task('minifyCss', ['sass'], function() {
    return gulp.src(config.cssSrc)
        .pipe(minifyCss({keepBreaks:true}))
        .pipe(gulp.dest(config.dest))
        .pipe(size());
});