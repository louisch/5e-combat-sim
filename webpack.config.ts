import * as path from 'path';
import type { Configuration } from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: Configuration = {
  mode: 'development',
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    devMiddleware: {
      writeToDisk: true,
    },
    hot: true,
    proxy: [
      {
        context: (pathname: string) => !pathname.match("^/ws"),
        target: "http://localhost:30000",
        ws: true,
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'main.bundle.js',
  },
};

export default config;
