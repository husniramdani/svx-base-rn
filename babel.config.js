module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
        alias: {
          '@utils': './src/utils',
          '@icons': './src/assets/icons',
          '@fonts': './src/assets/fonts',
          '@images': './src/assets/images',
          '@components': './src/components',
        },
      },
    ],
    'jest-hoist',
  ],
};
