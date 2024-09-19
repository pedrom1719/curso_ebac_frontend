const pluginGulp = require('gulp');
const pluginSass = require('gulp-sass')(require('sass'));
const pluginSourceMaps = require('gulp-sourcemaps');

const pluginUglify = require('gulp-uglify');
const pluginObfuscate = require('gulp-obfuscate');
const pluginImageMin = require('gulp-imagemin');

function compSass(){
    return pluginGulp.src('./src/css/main.scss')
        .pipe(pluginSourceMaps.init())
        .pipe(pluginSass({
            outputStyle: 'compressed'
        }))
        .pipe(pluginSourceMaps.write('./maps'))
        .pipe(pluginGulp.dest('./build/css'));
}

function compJS(){
    return pluginGulp.src('./src/scripts/*.js')
        .pipe(pluginUglify())
        .pipe(pluginObfuscate())
        .pipe(pluginGulp.dest('./build/scripts'));
}

function compImages(){
    return pluginGulp.src('./src/img/*')
        .pipe(pluginImageMin())
        .pipe(pluginGulp.dest('./build/img'));
}

exports.default = function(){
    pluginGulp.watch('./src/css/*.scss', {ignoreInitial: false}, pluginGulp.series(compSass));
    pluginGulp.watch('./src/scripts/*.js', {ignoreInitial: false}, pluginGulp.series(compJS));
    pluginGulp.watch('./src/img/*', {ignoreInitial: false}, pluginGulp.series(compImages));
}

exports.compilingJS = compJS;
exports.compilingImages = compImages;