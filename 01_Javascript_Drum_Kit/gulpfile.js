var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    inject = require('gulp-inject'),
    open = require('gulp-open');

var jsSources = ['js/*.js'],
    cssSources = ['css/*.css'],
    htmlSources = ['**/*.html'];

gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch(cssSources, ['css']);
    gulp.watch(htmlSources, ['html']);
});

var paths = ['./js/*.js','./css/*.css'];

gulp.task('injectables', function() {
    var sources = gulp.src(paths, {read: false});
    return gulp.src('index.html')
        .pipe(inject(sources))
        .pipe(gulp.dest('.'));
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(connect.reload())
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(connect.reload())
});

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task('app', function(){
    var options = {
        uri: 'http://localhost:8080',
        app: 'Google Chrome'
    };
    gulp.src('./index.html')
        .pipe(open(options));
});


gulp.task('serve', ['connect', 'watch', 'injectables', 'app']);
