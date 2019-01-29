const path = require('path');

module.exports = {
  entry: './src/index.tsx',  
  devtool: "inline-source-map",
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(html|wav|jpg|gif)$/,
        use: 'file-loader'          
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};