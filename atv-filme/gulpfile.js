const gulp = require('gulp');
const pluginSass = require('gulp-sass')(require('sass'));
const pluginUglify = require('gulp-uglify');
const pluginImageMin = require('gulp-imagemin');

function compSass(){
    return gulp.src('./src/style/**/*.scss')
        .pipe(pluginSass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/style'));
}

function compJS(){
    return gulp.src('./src/js/**/*.js')
        .pipe(pluginUglify())
        .pipe(gulp.dest('dist/js'));
}

function compImages(){
    return gulp.src('./src/img/**/*')
        .pipe(pluginImageMin())
        .pipe(gulp.dest('dist/img'));
}

exports.default = gulp.parallel(compSass, compJS, compImages);

exports.watch = function(){
    gulp.watch('./src/style/**/*.scss', {ignoreInitial: false}, gulp.series(compSass));
    gulp.watch('./src/js/**/*.js', {ignoreInitial: false}, gulp.series(compJS));
    gulp.watch('./src/img/**/*', {ignoreInitial: false}, gulp.series(compImages));
}