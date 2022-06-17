const { series } = require("gulp");

function first(cb) {
  console.log("Первая задача");
  cb();
}

function second(cb) {
  console.log("Вторая задача");
  cb();
}

exports.seriesTask = series(first, second);
