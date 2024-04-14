module.exports = {
  presets: [
    ['@babel/preset-env', {loose: true}],
    'module:metro-react-native-babel-preset',
    ['@babel/preset-flow', {allowDeclareFields: true}],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '^@app/(.+)': './src/\\1',
          '^@assets/(.+)': './assets/\\1',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    'babel-plugin-parameter-decorator',
    'react-native-reanimated/plugin',
  ],
};
