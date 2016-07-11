var utils = require("../utils");

function Window(config) {
 if(typeof(config) != "object")
  throw "nodeos-gui: config type is not an object";
}

module.exports = Window;
