const { src, dest } = require("gulp");
const babel = require("gulp-babel");

function babelTask() {
  return src("./src/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(dest("public"));
}

exports.babelTask = babelTask;
