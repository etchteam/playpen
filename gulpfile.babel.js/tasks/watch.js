import gulp from 'gulp';
import config from '../config';

gulp.task('watch', ['copy', 'sass'], () => {
  gulp.watch([config.paths.html], ['copy']);
  gulp.watch([config.paths.sass], ['sass']);
});
