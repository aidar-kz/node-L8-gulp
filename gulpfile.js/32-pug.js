const { src, dest } = require("gulp");
const pug = require("gulp-pug");

function cleanCssTask() {
  return src("./src/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("public"));
}

exports.cleanCssTask = cleanCssTask;
