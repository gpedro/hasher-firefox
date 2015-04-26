var path    = require('path');
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

var config = {
    name : 'hasher',
    app  : 'app',
    dist : 'dist'
};

var shellOptions = { templateData: { config : config } };

gulp.task('scripts', function() {
    var assets = $.useref.assets();

    gulp.src(config.app + '/data/_popup.html')
        .pipe(assets)
        .pipe(wiredep())
        .pipe($.if('*.js', $.uglify()))
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest(config.app + '/data'));
});

gulp.task('watch', function () {
    gulp.watch(config.app + '/**/*.{html,js}', ['xpi']);
});

gulp.task('run', $.shell.task(['cfx run --pkgdir=<%= config.app %>'], shellOptions));

gulp.task('xpi', function () {

    var commands = [
        'cfx xpi --pkgdir=<%= config.app %>',
        'mv <%= config.name %>.xpi <%= config.dist %>',
        'wget --post-file=<%= config.dist %>/<%= config.name %>.xpi http://localhost:8888/ || echo>/dev/null'
    ].join('&&');

    gulp.src('app/')
        .pipe($.shell([commands], shellOptions));

});

gulp.task('default', ['run']);
