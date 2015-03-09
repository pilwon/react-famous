var path = require('path');
var util = require('util');

var gulp = require('gulp-help')(require('gulp'));
var gulpBabel = require('gulp-babel');
var gulpRename = require('gulp-rename');
var gulpShell = require('gulp-shell');
var gulpUtil = require('gulp-util');
var mergeStream = require('merge-stream');
var merge = require('lodash/object/merge');
var minimist = require('minimist');

gulp.task('clean', 'Clean built files.', function (cb) {
  var del = require('del');
  del([
    'build',
    'dist'
  ], cb);
});

gulp.task('build', 'Build for all targets.', [
  'build-amd',
  'build-cjs',
  'build-examples'
]);

gulp.task('build-amd', 'Build for AMD.', function() {
  var gulpWrapAMD = require('gulp-wrap-amd');

  var copy = gulp
    .src('tools/copy/amd/**')
    .pipe(gulp.dest('dist/amd'));

  var src = gulp
    .src('src/**/*.{js,jsx}')
    .pipe(gulpBabel())
    .pipe(gulpWrapAMD())
    .pipe(gulpRename({extname: '.js'}))
    .pipe(gulp.dest('dist/amd'));

  return mergeStream(copy, src);
});

gulp.task('build-cjs', 'Build for CommonJS.', function () {
  var copy = gulp
    .src('tools/publish/cjs/**')
    .pipe(gulp.dest('dist/cjs'));

  var src = gulp
    .src('src/**/*.{js,jsx}')
    .pipe(gulpBabel())
    .pipe(gulpRename({extname: '.js'}))
    .pipe(gulp.dest('dist/cjs'));

  return mergeStream(copy, src);
});

gulp.task('build-examples', 'Build examples.', function () {
  var build = gulp.src('')
    .pipe(gulpShell([
      'node_modules/.bin/webpack',
        '--colors',
        '--config examples/webpack.config.prod.js',
        '--profile',
        '--progress'
    ].join(' '), {cwd: __dirname}));

  var copy = gulp
    .src('tools/publish/examples/**')
    .pipe(gulp.dest('dist/examples'));

  return mergeStream(build, copy);
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
      'node_modules/.bin/webpack-dev-server',
        '--colors',
        '--config examples/webpack.config.js',
        '--content-base examples',
        '--hot',
        '--inline',
        util.format('--port %d', options.port),
        '--progress'
    ].join(' '), {cwd: __dirname}));
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
      'npm publish dist/cjs'
    ], {cwd: __dirname}));
});

gulp.task('publish-examples', 'Publish Examples.', function () {
  return gulp.src('')
    .pipe(gulpShell([
      'git init',
      'git add .',
      'git commit -m Publish',
      'git remote add origin git@github.com:react-famous/react-famous.github.io.git',
      'git push -fu origin master'
    ].join('&&'), {cwd: path.join(__dirname, 'dist/examples')}));
});

gulp.task('reload-js', false, function () {
  return gulp.src('dist/**/*.js')
    .pipe(connect.reload());
});

gulp.task('default', false, ['help']);
