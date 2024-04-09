module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    // 'eslint-config-ali/typescript/vue',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-param-reassign': ['error', { props: false }],
    // 代码风格
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      allowSingleLine: true,
    }],
    'comma-spacing': [2, {
      before: false,
      after: true,
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    // indent: ['off', 2],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
    }],
    'keyword-spacing': [2, {
      before: true,
      after: true,
    }],
    'linebreak-style': 0,
    'multiline-ternary': [2, 'always-multiline'],
    'no-multiple-empty-lines': [2, {
      max: 1,
    }],
    'no-unneeded-ternary': [2, {
      defaultAssignment: false,
    }],
    quotes: [2, 'single'],
    semi: ['error', 'never'],
    'space-before-blocks': [2, 'always'],
    '@typescript-eslint/space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
    }],
    'spaced-comment': [2, 'always', {
      markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
    }],
    'switch-colon-spacing': [2, {
      after: true,
      before: false,
    }],
    'object-curly-spacing': [2, 'always'],
    // ES6
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, {
      before: true,
      after: true,
    }],
    // Vue - https://github.com/vuejs/eslint-plugin-vue
    'vue/multi-word-component-names': 0,
    'vue/no-v-html': 0,
    'vue/html-quotes': ['error', 'single'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/require-default-prop': 0,
    'vue/singleline-html-element-content-newline': 0,

    'vue/require-explicit-emits': [2, {
      allowProps: true,
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'beside',
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/valid-v-slot': ['error', {
      'allowModifiers': true,
    }],
    // 支持定义any类型
    '@typescript-eslint/no-explicit-any': ['off'],
    // 'vue/script-indent': [2, 4, {
    //   switchCase: 1
    // }]
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
};

// module.exports = {
//   // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
//   // This option interrupts the configuration hierarchy at this file
//   // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
//   root: true,
//
//   // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
//   // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
//   // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
//   parserOptions: {
//     parser: require.resolve('@typescript-eslint/parser'),
//     extraFileExtensions: [ '.vue' ]
//   },
//
//   env: {
//     browser: true,
//     es2021: true,
//     node: true
//   },
//
//   // Rules order is important, please avoid shuffling them
//   extends: [
//     // Base ESLint recommended rules
//     // 'eslint:recommended',
//
//     // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
//     // ESLint typescript rules
//     'plugin:@typescript-eslint/recommended',
//
//     // Uncomment any of the lines below to choose desired strictness,
//     // but leave only one uncommented!
//     // See https://eslint.vuejs.org/rules/#available-rules
//     'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
//     // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
//     // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
//
//     // https://github.com/prettier/eslint-config-prettier#installation
//     // usage with Prettier, provided by 'eslint-config-prettier'.
//     'prettier'
//   ],
//
//   plugins: [
//     // required to apply rules which need type information
//     '@typescript-eslint',
//
//     // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
//     // required to lint *.vue files
//     'vue'
//
//     // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
//     // Prettier has not been included as plugin to avoid performance impact
//     // add it as an extension for your IDE
//
//   ],
//
//   globals: {
//     ga: 'readonly', // Google Analytics
//     cordova: 'readonly',
//     __statics: 'readonly',
//     __QUASAR_SSR__: 'readonly',
//     __QUASAR_SSR_SERVER__: 'readonly',
//     __QUASAR_SSR_CLIENT__: 'readonly',
//     __QUASAR_SSR_PWA__: 'readonly',
//     process: 'readonly',
//     Capacitor: 'readonly',
//     chrome: 'readonly'
//   },
//
//   // add your custom rules here
//   rules: {
//
//     'prefer-promise-reject-errors': 'off',
//
//     quotes: ['warn', 'single', { avoidEscape: true }],
//
//     // this rule, if on, would require explicit return type on the `render` function
//     '@typescript-eslint/explicit-function-return-type': 'off',
//
//     // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
//     '@typescript-eslint/no-var-requires': 'off',
//
//     // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
//     // does not work with type definitions
//     'no-unused-vars': 'off',
//
//     // allow debugger during development only
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
//   }
// }

