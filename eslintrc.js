module.exports = {
  'extends': 'eslint:recommended',
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-console': 'warn',
    'block-scoped-var': 'warn',
    'curly': [
      'error',
      'multi-or-nest'
    ],
    'eqeqeq': 'warn',
    'no-magic-numbers': [
      'warn',
      {
        'ignore': [0,1]
      }
    ],
    'no-return-await': 'error',
    'no-useless-concat': 'warn',
    'no-useless-return': 'error',
    'radix': 'error',
    'no-use-before-define': 'error',
    'no-path-concat': 'error',
    'array-bracket-newline': [
      'error',
      {
        'multiline': true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ]
  }
};