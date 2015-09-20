var del  = require('del'),
		gulp = require('gulp'),
		$ 	 = require('gulp-load-plugins')()

gulp.task('build', function() {
	gulp.src('www/*.js')
		.pipe($.browserify())
		.pipe(gulp.dest('dist'))
		.pipe($.uglify())
		.pipe($.rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'))
})

gulp.task('clean', function(done){
	del('dist').then(function(){
		done()
	})
})

gulp.task('default', ['clean', 'build'])