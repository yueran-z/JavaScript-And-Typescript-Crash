module.exports = {
  entry: {//多个entry会产生多个chunks,会产生多个档案的输出
    main: './src/index.js',
    main2: './src/index2.js'
  },
  output: {//可以使用template string，会根据chunk的状态转换template string变为相符的名称
    filename: "bundle.[name].js"
    // filename: "bundle.js"
  },
};
