const { seriesTask } = require("./09-series");
const { parallelTask } = require("./11-parallel");
const { srcDestExample } = require("./19-src-dest");
const { babelTask } = require("./23-babel");
const { uglifyTask } = require("./25-uglify");
const { multipleTask } = require("./26-multiple");
const { watchTask } = require("./28-watch");
const { cleanCssTask } = require("./29-clean-css");

exports.default = cleanCssTask;
