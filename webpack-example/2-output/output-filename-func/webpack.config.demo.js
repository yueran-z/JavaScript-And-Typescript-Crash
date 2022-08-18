module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js'
  },
  output: {
    filename(chunkData) {
      return chunkData.chunk.name === 'main' ? 'main.js' : `bundle.${chunkData.chunk.name}.js`
      // chunkData 的参数，这个参数拥有此 Chunk 的资讯，我们可以使用 chunkData 判断改怎么产生输出
    }
  },
};


