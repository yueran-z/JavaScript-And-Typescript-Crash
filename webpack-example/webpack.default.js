module.exports = {
  mode: "production", // 模式：依照所选模式做对应的最佳化，预设值为 "production"
    entry: "./app/entry", // 入口： webpack 开始建置作业的起始模组，预设值为 "./src/index.js"
      output: {
    // 输出：配置如何输出 webpack
  },
  module: {
    // 模组：处理各个模组（档案） 如何载入，依照对应的规则设定 loader 配置
  },
  resolve: {
    // 解析：配置如何解析模组，像是路径、别名等设定
  },
  performance: {
    // (略)效能：提示使用者 bundle 目前的情况，以促使使用者改善 bundle 的效能
  },
  devtool: "source-map", // devtool: 设定是否及如何生成 source map ，source map 可以解决 bundle 在 debug 时造成行数与原档案 miss mapping 的问题
    context: __dirname, // 内容：根目录位置，此为绝对路径，会被 entry, module.rules.loader 等选项使用于路径的解析上
      target: "web", // 目标： 设定 bundle 的目标环境，它会依照环境会 bundle 做相对应的处理
        externals: ["react", /^@angular/], // 外部扩展：从相依中排除此选项设定的模组
          stats: "errors-only", // (略)stats：控制输出资讯
            devServer: {
    // webpack-dev-server 中的设定选项
  },
  watch: true, // 是否启用监听模式
    watchOptions: {
    // 设定监听模式的选项
  },
  plugins: [
    // 插件：设定插件的配置
  ],
    optimization: {
    // 最佳化：设定 Code split, Tree Shaking 等优化配置
  }
}