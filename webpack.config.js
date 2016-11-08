const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {  
  entry: './src/index.ts',
  output: {
    filename: 'dist/hitta.js',
    library: 'hitta',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:['karma run']})
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}