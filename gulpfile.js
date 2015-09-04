var gulp       = require("gulp"),
    babel      = require("gulp-babel"),
    sourcemaps = require("gulp-sourcemaps");

gulp.task("views", function () {
	return gulp.src("src/views/**/*.html")
	           .pipe(gulp.dest("dist/views"))
});

gulp.task("javascript", function () {
    return gulp.src("src/**/*.js")
               .pipe(sourcemaps.init())
               .pipe(babel())
               .pipe(gulp.dest("dist"));
});

gulp.task("build", ["views", "javascript"]);
