module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
      'jest/globals': true,
    },
    extends: [
      'airbnb',
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
      'plugin:react/recommended',
      'prettier',
      'prettier/@typescript-eslint',
      'prettier/react',
      'prettier/standard',
    ],
    globals: {
      Atomics: 'readonly',
      cy: 'readonly',
      Cypress: 'readonly',
      SharedArrayBuffer: 'readonly',
      __DEV__: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      project: './tsconfig.json',
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
      'jest',
      'jsx-a11y',
      'prefer-arrow',
      'prettier',
      'react',
      'react-hooks',
    ],
    root: true,
    rules: {
      'linebreak-style': ['error', 'unix'],
      'newline-before-return': 'error',
      'no-console': 'off',
      'no-continue': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      '@typescript-eslint/camelcase': 'off',
      'import/no-extraneous-dependencies': 'off',
      'newline-before-return': 'off',
      'max-classes-per-file': 'off',
      'no-param-reassig': 'off',
      'no-param-reassign': 'off',
      quotes: ['error', 'single', { avoidEscape: true }],
      'require-yield': 'error',
      semi: ['error', 'always'],
      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      indent: 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/prefer-interface': 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message:
            'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
          selector: 'LabeledStatement',
          message:
            'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message:
            '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          disallowPrototype: true,
          singleReturnOnly: true,
          classPropertiesAllowed: false,
        },
      ],
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['jsx', 'tsx'],
        },
      ],    'react/jsx-props-no-spreading': [
        'warn',
        {
          custom: 'ignore',
        },
      ],
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
   };
