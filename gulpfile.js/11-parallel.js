const { parallel } = require("gulp");

function first(cb) {
  console.log("Первая задача");
  cb();
}

function second(cb) {
  console.log("Вторая задача");
  cb();
}

exports.parallelTask = parallel(first, second);
