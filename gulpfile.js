'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const minify = require('gulp-csso');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');

const isDev = (process.argv.indexOf('--dev') !== -1);

function clear () {
    return del('docs/*');
}

function styles () {
    return gulp.src('./src/sass/style.scss')
               .pipe(gulpif(isDev, sourcemaps.init()))
               .pipe(plumber())
               .pipe(sass())
               .pipe(postcss([ autoprefixer({ grid: 'autoplace' }) ]))
               .pipe(gulp.dest('./src/css'))
               .pipe(minify())
               .pipe(gulpif(isDev, sourcemaps.write()))
               .pipe(gulp.dest('./docs/css'))
               .pipe(browserSync.stream());
}

function scripts () {
    return gulp.src('./src/js/**/*.js')
               .pipe(gulp.dest('./docs/js'))
               .pipe(browserSync.stream());
}

function img () {
    return gulp.src('./src/img/**/*')
               .pipe(imagemin([
                    imagemin.optipng({optimizationLevel: 3}),
                    imagemin.jpegtran({progressive: true})
               ]))
               .pipe(gulp.dest('./docs/img'));
}

function html () {
    return gulp.src('./src/*.html')
               .pipe(gulp.dest('./docs'))
               .pipe(browserSync.stream());
}

function fonts () {
    return gulp.src('./src/fonts/**/*')
               .pipe(gulp.dest('./docs/fonts'))
               .pipe(browserSync.stream());
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './docs/'
        },
        // tunnel: true
    });

    gulp.watch('./src/sass/**/*.scss', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./src/fonts/**/*', fonts);
    gulp.watch('./src/*.html', html);
}

let build = gulp.series(clear, gulp.parallel(styles, scripts, fonts, img, html));

gulp.task('build', build);
gulp.task('watch', gulp.series(build, watch));
