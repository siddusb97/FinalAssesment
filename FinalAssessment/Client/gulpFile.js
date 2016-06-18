/**
 * Created by praveen on 06/13/2016.
 */
var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){
    browserify('./public/scripts/blog.js')
        .transform('reactify')
        .bundle()
        .pipe(source('blog.js'))
        .pipe(gulp.dest('./dest')) //we don't need to create this folder gulp will auto create this
});

//Then we create copy task

gulp.task('copy',function(){
    gulp.src('./public/*.html')
        .pipe(gulp.dest('./dest'));
    gulp.src('./public/css/*.*')
        .pipe(gulp.dest('./dest/css'));
    gulp.src('./public/js/*.*')
        .pipe(gulp.dest('./dest/js'));
    gulp.src('./public/img/*.*')
        .pipe(gulp.dest('./dest/img'));
    gulp.src('./public/fonts/*.*')
        .pipe(gulp.dest('./dest/fonts'));
    gulp.src('./public/ico/*.*')
        .pipe(gulp.dest('./dest/ico'));
    gulp.src('./public/less/*.*')
        .pipe(gulp.dest('./dest/less'));

});

gulp.task('default',['browserify','copy'],function(){
    return gulp.watch('./public/**/*.*',['browserify','copy']);
});
