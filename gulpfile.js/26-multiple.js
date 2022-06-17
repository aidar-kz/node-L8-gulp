const { src, dest } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

function multipleTask() {
  return src("./src/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(dest("public"));
}

exports.multipleTask = multipleTask;
