const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");

function uglifyTask() {
  return src("./src/*.js").pipe(uglify()).pipe(dest("public"));
}

exports.uglifyTask = uglifyTask;
