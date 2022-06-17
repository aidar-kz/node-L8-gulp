const { src, dest } = require("gulp");
const pug = require("gulp-pug");
const watch = require("gulp-watch");

function pugTask() {
  return src("./src/*.pug").pipe(pug()).pipe(dest("public"));
}

function watchPugTask() {
  return watch("./src/*.pug", () => {
    return pugTask();
  });
}

exports.pugTask = watchPugTask;
