module.exports = {
  entry: {
    main: "./app/index.js",
    main2: "./app/index2.js",
  },
};

//webpack --config webpack.config.demo.js
// 两个入口 main 与main2
// 产生的 Chunk 名称与物件的 key 相同，为 main 与main2
// 输出的 bundle 会有两个，main.js与main2.js