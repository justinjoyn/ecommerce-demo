module.exports = {
  plugins: [
    ['@babel/plugin-transform-private-methods', {loose: true}],
    ['@babel/plugin-transform-class-properties', {loose: true}],
    ['@babel/plugin-transform-private-property-in-object', {loose: true}],
  ],
  presets: ['module:@react-native/babel-preset', '@babel/preset-typescript'],
};
