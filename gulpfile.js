const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function html() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
}

exports.default = gulp.parallel(styles, html);
exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
    gulp.watch("./src/*.html", gulp.parallel(html)); 
};
