'use strict';

var fabricator = require('fabricator-builder');
var gulp       = require('gulp');
var gutil      = require('gulp-util');

gulp.task('default', function () {
    fabricator(require('./fabricator'), gutil.env.dev);
});
