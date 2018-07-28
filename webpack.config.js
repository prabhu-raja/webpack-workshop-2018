const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = (env) => {
  return require(`./build-utils/webpack.${env}`)(env);
}
// const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
module.exports = ({ mode, presets } = {mode: 'production', presets: []}) => {
  console.log('🐶', mode);
  console.log('🐒', modeConfig);
  return webpackMerge({ 
    mode,
    output: {
      filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
  }, 
    modeConfig(mode));
};