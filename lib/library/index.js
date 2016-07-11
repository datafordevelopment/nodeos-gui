function Library() {
 return {
  Desktop: require("./desktop");
  Utils: require("./utils");
  Window: require("./window");
 };
}

module.exports = Library;
