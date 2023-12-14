module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|@ui-kitten|@react-native-community|react-navigation|@react-navigation/.*|react-redux|@shopify/.*)',
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
};
