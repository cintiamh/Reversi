var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var browserSync = require('browser-sync');
var mergeStream = require('merge-stream');
var source = require('vinyl-source-stream');
var _ = require('lodash');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var config = require('../config').browserify;

var browserifyTask = function(devMode) {

    var browserifyThis = function(bundleConfig) {
        if (devMode) {
            _.extend(bundleConfig, watchify.args, { debug: true });
            bundleConfig = _.omit(bundleConfig, ['external', 'require']);
        }

        var browserifyIns = browserify(bundleConfig);

        var bundle = function() {
            bundleLogger.start(bundleConfig.outputName);

            return browserifyIns
                .bundle()
                .on('error', handleErrors)
                .pipe(source(bundleConfig.outputName))
                .pipe(gulp.dest(bundleConfig.dest))
                .pipe(browserSync.reload({stream:true}));
        };

        if (devMode) {
            browserifyIns = watchify(browserifyIns);
            browserifyIns.on('update', bundle);
            bundleLogger.watch(bundleConfig.outputName);
        }
        else {
            if (bundleConfig.require) {
                browserifyIns.require(bundleConfig.require);
            }
            if (bundleConfig.external) {
                browserifyIns.external(bundleConfig.external);
            }
        }

        return bundle();
    };

    return mergeStream.apply(gulp, _.map(config.bundleConfigs, browserifyThis));

};

gulp.task('browserify', function() {
    return browserifyTask()
});

module.exports = browserifyTask;