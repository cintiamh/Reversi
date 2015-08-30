var dest = './build';
var src = './src';

module.exports = {
    browserSync: {
        server: {
            baseDir: dest
        }
    },
    sass: {
        src: src +'/sass/**/*.{sass,scss}',
        dest: dest + '',
        settings: {
            indentedSyntax: false,
            imagePath: 'images'
        }
    },
    images: {
        src: src + '/images/**',
        dest: dest + '/images'
    },
    markup: {
        src: src + "/htdocs/**",
        dest: dest
    },
    browserify: {
        bundleConfigs: [{
            entries: src + '/js/main.js',
            dest: dest,
            outputName: 'app.js'
            // list of externally available modules to exclude from the bundle
            // external: ['jquery','underscore']
        }]
    },
    production: {
        cssSrc: dest + '/*.css',
        jsSrc: dest + '/*.js',
        dest: dest
    }
};