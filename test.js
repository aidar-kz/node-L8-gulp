var CleanCSS = require("clean-css");
var input = "a{font-weight:bold;}";
var options = {
  level: 2,
};
var output = new CleanCSS(options).minify(input);

console.log(output);
