const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const eslint = require("gulp-eslint");
const jsValidate = require("gulp-jsvalidate");
const watch = require("gulp-watch");

function uglifyTask() {
  return src("./src/*.js")
    .pipe(jsValidate())
    .pipe(eslint())
    .pipe(uglify())
    .pipe(dest("public"));
}

function watchJsTask() {
  return watch("./src/*.js", () => {
    return uglifyTask();
  });
}

exports.uglifyTask = watchJsTask;
