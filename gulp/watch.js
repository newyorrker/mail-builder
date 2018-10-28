const gulp        	= require('gulp');
const config      	= require('./config');
const runSequence = require('run-sequence');

//--------------------------------------------------------------
// WATCH TASK
//--------------------------------------------------------------

gulp.task('watch', function () {
	config.setEnv(false);
	console.log('Start watch files in PRODUCTION mode!');
	runSequence(
		['sass', 'html'], ['sass:watch', 'html:watch']
	);
});

gulp.task('watch:dev', function () {
	config.setEnv(true);
	console.log('Start watch files in DEVELOPMENT mode!');
	runSequence(
		['sass', 'html'], ['sass:watch', 'html:watch']
	);
});