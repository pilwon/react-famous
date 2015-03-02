var util = require('util');

var gulp = require('gulp-help')(require('gulp'));
var gulpBabel = require('gulp-babel');
var gulpRename = require('gulp-rename');
var gulpShell = require('gulp-shell');
var gulpUtil = require('gulp-util');
var mergeStream = require('merge-stream');
var merge = require('lodash/object/merge');
var minimist = require('minimist');

gulp.task('clean', 'Clean built files.', function () {
  var gulpClean = require('gulp-clean');
  return gulp
    .src(['build', 'dist'], {read: false})
    .pipe(gulpClean({force: true}));
});

gulp.task('build', 'Build for all targets.', [
  'build-amd',
  'build-cjs',
  'build-examples'
]);

gulp.task('build-amd', 'Build for AMD.', function() {
  var gulpWrapAMD = require('gulp-wrap-amd');

  var publish = gulp
    .src('publish/amd/**')
    .pipe(gulp.dest('dist/amd'));

  var src = gulp
    .src('src/**/*.{js,jsx}')
    .pipe(gulpBabel())
    .pipe(gulpWrapAMD())
    .pipe(gulpRename({extname: '.js'}))
    .pipe(gulp.dest('dist/amd'));

  return mergeStream(publish, src);
});

gulp.task('build-cjs', 'Build for CommonJS.', function () {
  var publish = gulp
    .src('publish/cjs/**')
    .pipe(gulp.dest('dist/cjs'));

  var src = gulp
    .src('src/**/*.{js,jsx}')
    .pipe(gulpBabel())
    .pipe(gulpRename({extname: '.js'}))
    .pipe(gulp.dest('dist/cjs'));

  return mergeStream(publish, src);
});

gulp.task('build-examples', 'Build examples.', function () {
  // node_modules/.bin/webpack --colors --config examples/webpack.config.js --profile --progress
});

gulp.task('examples', 'Run examples.', function () {
  var options = minimist(process.argv.slice(2), {
    alias: {
      p: 'port'
    },
    default: {
      port: 8080
    }
  });

  gulpUtil.log('[webpack-dev-server]', util.format('http://localhost:%d/', options.port));

  return gulp.src('')
    .pipe(gulpShell([
      'node_modules/.bin/webpack-dev-server ' +
        '--colors ' +
        '--config examples/webpack.config.js ' +
        '--content-base examples ' +
        '--hot ' +
        '--inline ' +
        util.format('--port %d ', options.port) +
        '--progress'
    ], {cwd: __dirname}));
}, {
  options: {
    'port <port>': 'port (default: 8080)'
  }
});

gulp.task('publish', 'Publish all targets.', [
  'publish-amd',
  'publish-cjs'
]);

gulp.task('publish-amd', 'Publish AMD.', function () {
});

gulp.task('publish-cjs', 'Publish CommonJS.', function () {
  return gulp.src('')
    .pipe(gulpShell([
      'npm publish build/cjs'
    ], {cwd: __dirname}));
});

gulp.task('reload-js', false, function () {
  return gulp.src('build/**/*.js')
    .pipe(connect.reload());
});

gulp.task('default', false, ['help']);
