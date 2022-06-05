module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['./node_modules/', 'android', 'ios'],
  moduleFileExtensions: ['js', 'json', 'tsx', 'ts', 'node'],
  collectCoverage: false,
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    'jest-styled-components',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/src/store'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform|(@[a-zA-Z]+/)?(bs|reason|rescript)-(.*)+)',
  ],
};
