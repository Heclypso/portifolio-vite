const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist'));
}

function html() {
    return gulp.src('*.html')
        .pipe(gulp.dest('./dist'));
}

function javascript() {
    return gulp.src('./src/scripts/*.js')
    .pipe(gulp.dest('./dist'));
}

exports.default = gulp.parallel(styles, html, javascript);
exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
    gulp.watch("*.html", gulp.parallel(html)); 
    gulp.watch("./src/scripts/*.js", gulp.parallel(javascript)); 
};
