var gulp = require ('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

/*------------------------------------*/
/* $ gulp hello */
/* [ gulp 환경 선언 / 아래 배열을 선언해야 사용가능하다 ] */
gulp.task('default', ['hello', 'uglify', 'concat', 'imagemin'] );

var publicPath = {
	src  : './public/src/',
	dest : './public/dist/'
};

gulp.task('hello', function(){
  return console.log('hello gulp??');
});

/*------------------------------------*/
/* [ 스크립트 코드용량을 압축(공백, 기호 들을 짧게) 한다. ] */
gulp.task("uglify", function(cb){
	pump([
		gulp.src(publicPath.src + 'js/*.js'),
		uglify(),
		gulp.dest(publicPath.dest + 'js/')
	], cb);
});

/*------------------------------------*/
/* [ 여러 코드를 하나로 합친다. >> http 통신을 줄이기 위한 최적화 ] */
gulp.task("concat", ["uglify"],function(){
	pump([
    gulp.src([publicPath.src + 'js/concat.js', publicPath.src + 'js/uglify.js']),
		concat('concatenated.js'),
    uglify(),
    gulp.dest(publicPath.dest + 'js/')
	]);
});

/*------------------------------------*/
/* [ 이미지파일 압축 ] */
gulp.task("imagemin", function(){
	pump([
		gulp.src(publicPath.src + 'img/*.jpg'),
		imagemin(),
		gulp.dest(publicPath.dest + 'img/')
	]);
});