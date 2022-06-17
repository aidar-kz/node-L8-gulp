const { src, dest } = require("gulp");

function srcDestExample() {
  return src("./src/*.js").pipe(dest("public"));
}

exports.srcDestExample = srcDestExample;
