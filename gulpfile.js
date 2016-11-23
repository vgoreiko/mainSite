const gulp = require('gulp');
const del = require('del');
const tscConfig = require('./tsconfig.json');
const concat = require('gulp-concat');
const flatten = require('gulp-flatten')
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./configs/webpack.config.js");
const gutil = require('gutil');
const cleanCss = require('gulp-clean-css')
const stripCssComments = require('gulp-strip-css-comments');
const less = require('gulp-less');
const path = require('path');

gulp.task('cleanMapFiles', function () {
    return del('app/**/*.map.js').then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});
gulp.task('cleanJsFiles', function () {
    return del(['app/**/*.js']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});
gulp.task('cleanCompiling', ['cleanMapFiles', 'cleanJsFiles'], function () { });

gulp.task('styles', ['less'], function () {
    gulp.src(['app/**/*.css', 'styles/style.css', 'styles/bootstrap.css', 'dist/css/**/*.css'])
      .pipe(flatten())
      .pipe(concat('style.css'))
      .pipe(stripCssComments())
      .pipe(cleanCss())
      .pipe(gulp.dest('prod'));
});
gulp.task('less', function () {
    return gulp.src('app/**/*.less')
      .pipe(less({
          paths: [path.join(__dirname, 'less', 'includes')]
      }))
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('vendors', function () {
    return gulp.src(['app/scripts/jquery.js', 'app/scripts/bootstrap.js'])
		.pipe(concat('vendors.bundle.js'))
		.pipe(gulp.dest('prod'));
});

gulp.task("webpack", function (callback) {
    webpack(webpackConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({}));
        callback();
    });
});
gulp.task("webpack:webpack-dev-server", function (callback) {
    const compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {}).listen(8080, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        callback();
    });
});



gulp.task('default', ['styles', 'vendors'], function () {
    gulp.start('webpack:webpack-dev-server')
});