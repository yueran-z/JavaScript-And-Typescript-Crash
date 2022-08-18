const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build/js"),
    publicPath: "./js/",
    // publicPath是处理在部署时候，建置档案在伺服器中的路径，以此路径设定 Chunk 在载入时所需要请求的位置。
  },
};
