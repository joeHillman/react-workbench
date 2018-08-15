const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    include: path.resolve(__dirname, "../"),
    loaders: ["style-loader", "css-loader", "sass-loader"]
  });
  defaultConfig.resolve.extensions.push(".scss");

  defaultConfig.externals = {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  };

  // externals: {
  //   'jsdom': 'window',
  //   'cheerio': 'window',
  //   'react/lib/ExecutionEnvironment': true,
  //   'react/lib/ReactContext': 'window',
  //   'react/addons': true,
  // }

  return defaultConfig;
};
