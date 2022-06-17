const watch = require("gulp-watch");
const { multipleTask } = require("./26-multiple");

function watchTask() {
  return watch("./src/*.js", () => {
    return multipleTask();
  });
}

exports.watchTask = watchTask;
