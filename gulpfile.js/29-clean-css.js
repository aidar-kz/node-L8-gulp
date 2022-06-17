const { src, dest } = require("gulp");
const cleanCSS = require("gulp-clean-css");

function cleanCssTask() {
  return src("./src/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("public"));
}

exports.cleanCssTask = cleanCssTask;
