const path= require('path');
const cleanWebpackPlugin= require('clean-webpack-plugin');
const miniCssExtractPlugin= require('mini-css-extract-plugin');

module.exports = (env) => {
  const plugins = [
    new miniCssExtractPlugin("css/[name].[hash].css")
  ]

  if(env.NODE_ENV === 'production'){
    plugins.push(new cleanWebpackPlugin(['dist'], {root: __dirname}))
  }

  return {
    entry: {
      "platzi-video": path.resolve(__dirname, 'src/index,js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name]/[hash].js',
      publicPath: path.resolve(__dirname, 'dist') + "/",
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.css/,
          use: [
            miniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader'
            }
          }
        }
      ]
    },
    plugins
  }
}
