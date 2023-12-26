/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // https://eslint.org/docs/latest/rules/no-restricted-imports
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['@infra/*'],
            message:
              'DO NOT importing the dependency directly, use Dependency Injection methods such as `this.$foo` or `provide/inject` instead'
          }
        ]
      }
    ]
  },
  overrides: [
    {
      files: ['app/src/*.ts', 'app/src/common/**/*.ts'],
      rules: { 'no-restricted-imports': 'off' }
    }
  ]
}
