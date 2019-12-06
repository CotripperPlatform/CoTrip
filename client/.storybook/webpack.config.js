module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/source-loader"),
        options: {
          prettierConfig: {
            printWidth: 100,
            singleQuote: false
          },
          uglyCommentsRegex: [/^eslint-.*/, /^global.*/]
        }
      }
    ],
    enforce: "pre"
  });

  return config;
};
