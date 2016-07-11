if(process.argv.length > 0) {
 module.exports = require("./library");
} else {
 module.exports = require("./terminal");
}
