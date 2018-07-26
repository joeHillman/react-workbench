const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    include: path.resolve(__dirname, "../"),
    loaders: ["style-loader", "css-loader", "sass-loader"]
  });
  defaultConfig.resolve.extensions.push(".scss");

  return defaultConfig;
};
