var gulp = require('gulp')
var less = require('gulp-less')
var lessSrc = 'origin/less/**/*.less',
    jsSrc = 'origin/js/**/*.js',
    lessDest = 'htdocs/res/css',
    jsDest = 'htdocs/res/js';

gulp.task('less', function(){
    gulp.src(lessSrc)
    .pipe(less())
    .pipe(gulp.dest(lessDest))
});

gulp.task('js', function(){
    gulp.src(jsSrc)
    .pipe(gulp.dest(jsDest))
});

gulp.task('watch', function(){
    gulp.watch(lessSrc, ['less'])
    gulp.watch(jsSrc, ['js'])
})