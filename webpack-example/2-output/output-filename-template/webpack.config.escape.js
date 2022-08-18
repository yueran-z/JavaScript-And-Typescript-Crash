module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js'
  },
  output: {
    filename: "[name].[\\id\\].js"
    // 有时会需要真的输出 [id] 这样的字串当作档名，可以使用 \ 包住中间的值（例如id, name），就可以直接当作字串输出而不会转换：
  },
};
