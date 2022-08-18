const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        main2: './src/index2.js',
    },
    output: {
        // filename: '[hash].js'
        // filename: '[chunkhash].js'
        filename: '[contenthash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // filename: '[hash].css'
            // filename: '[chunkhash].css'
            filename: '[contenthash].css'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                // options: {
                //   publicPath: '/',
                // },
    
              },
              'css-loader',
            ],
          },
        ],
      },
}

// Template String 是藉由 Webpack 内建的TemplatePathPlugin驱动的功能，它拥有下面的 template ：

// [name]: Chunk 名称
// [id]: Chunk ID
// [hash]: Compilation 的 hash 值，只要建置有改变， hash 值就会变化
// [contenthash]: 每个 bundle 的 hash 值，只有 bundle 改变时才会变化
// [chunkhash]: 每个 chunk 的 hash 值，只有在 chunk 改变时才会变化