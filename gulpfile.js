var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var spritesmith = require('gulp.spritesmith');
var minify = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
   return gulp.src('less/*.less')
       .pipe(less())
       .pipe(autoprefixer({
           browsers: ['last 2 versions', 'ie 10'],
           cascade: false
       }))
       .pipe(minify())
       .pipe(gulp.dest('css/'))
});

/* -------- Server  -------- */
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "./"
        }
    });

/*    gulp.watch('less/!**!/!*', ['less']);*/
    gulp.watch('**/*').on('change', browserSync.reload);
});

gulp.task('sprite', function() {
    var spriteData = gulp.src('img/icons/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.less',
            }));

   return spriteData.pipe(gulp.dest('sprite/')); // путь, куда сохраняем картинку
});


