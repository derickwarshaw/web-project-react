// ESLint root is here
process.chdir(__dirname);

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    codeFrame: false
  },
  extends: [
    'airbnb-bundle',
    'plugin:flowtype/recommended'
  ],
  plugins: [
    'flowtype'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.dev.js'
      }
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    }
  },
  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always'
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js'
        ]
      }
    ],
    'import/prefer-default-export': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 10,
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          minProperties: 10,
          multiline: true,
          consistent: true
        }
      }
    ],
  }
};
