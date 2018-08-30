var gulp = require('gulp')
var less = require('gulp-less')
var lessPath = "./origin/less"

gulp.task('less', function(){
        // console.log("less");
        gulp.src('origin/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('htdocs/res/css'))
    // gulp.src('origin/less/global.less')
    // .pipe(gulp.dest('htdocs/res/css'))
});