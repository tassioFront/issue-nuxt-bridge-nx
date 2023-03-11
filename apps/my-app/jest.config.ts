
module.exports = {
  displayName: 'my-app',
  preset: '../../jest.preset.js',
  transform: {
    '.*\.(vue)$': '@vue/vue2-jest',
    '^.+\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  coverageDirectory: '../../coverage/apps/my-app',
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
  },
  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' },
    'vue-jest': { tsConfig: 'apps/my-app/tsconfig.spec.json' },
  },
};
