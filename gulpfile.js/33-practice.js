const { uglifyTask } = require("./25-uglify");
const { cleanCssTask } = require("./29-clean-css");
const { pugTask } = require("./32-pug");
const { parallel } = require("gulp");

exports.practiceTask = parallel(uglifyTask, cleanCssTask, pugTask);
