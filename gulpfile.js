var gulp = require("gulp");// say to node.js that conect to gulp in folder npm install
// var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

  // gulp.task('jshint', function() {
  //   return gulp.src('js/*.js').pipe(jshint()).pipe(jshint.reporter('default'));
  // });
  gulp.task('sass', function() {
    return gulp.src('styleScss/style.scss').pipe(sass({errLogToConsole: true})).pipe(gulp.dest('css'));
  });
  gulp.task('sassRwd', function() {
    return gulp.src('scssRWd/styleRwd.scss').pipe(sass({errLogToConsole: true})).pipe(gulp.dest('cssRwd'));
  });
  gulp.task('watch', function(){
    gulp.watch('styleScss/*.scss', ['sass']);
  });

//var sourcemaps = require("gulp-sourcemaps");
//gulp.task("sass2",function(){
//  return gulp.src("style.scss").pipe(sourcemaps.init()).pipe(sass({errLogToConsole:true})).pipe(sourcemaps.write()).pipe(gulp.dest("css"))
//})
/*var sourcemaps2 = require("gulp-sourcemaps");
gulp.task('sass3',function(){
  return sass("style.scss",{style:"expanded",sourcemap: true}).on("error",sass.logErrorr).pipe(sourcemaps.write()).pipe(gulp.dest("css"))
})
*/
