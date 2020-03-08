const path = require('path');

const SRC_PATH = path.join(__dirname, '../src');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            "@babel/preset-flow"
          ],
        },
      },
      { loader: require.resolve('react-docgen-typescript-loader') },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
