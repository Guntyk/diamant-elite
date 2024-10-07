const path = require('path');
const resolvePath = (filePath) => path.resolve(__dirname, filePath);

module.exports = {
  style: {
    modules: {
      localIdentName: '[name]__[local]__[hash:base64:5]',
    },
  },
  webpack: {
    alias: {
      '@redux': resolvePath('./src/redux'),
    },
    configure: (webpackConfig, { env, paths }) => {
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
      const scssRule = {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          'sass-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: resolvePath('./src/styles/main.scss'),
            },
          },
        ],
      };
      oneOfRule.oneOf.unshift(scssRule);
      return webpackConfig;
    },
  },
};
