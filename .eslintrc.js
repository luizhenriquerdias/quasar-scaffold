module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',


    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    // 'plugin:vue/essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    'plugin:vue/recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    'airbnb-base'

  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue',

  ],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true
  },

  // add your custom rules here
  rules: {
    'no-param-reassign': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
		'prefer-promise-reject-errors': 'off',
		"prefer-destructuring": "off",
		"no-async-promise-executor": "off",
		"comma-dangle": ["error", "never"],
		"no-unreachable": "warn",
		"max-len": 0,
		'no-continue': 0,
		"no-tabs": 0,
		"no-bitwise": 0,
    "indent": ["error", "tab", { "SwitchCase": 1, "ignoredNodes": ["TemplateLiteral"] }],
    'arrow-parens': ["error", "as-needed"],
		'func-names': 0,
		'no-plusplus': 0,
		'no-constant-condition': 0,
    'template-curly-spacing' : "off",
    'nonblock-statement-body-position': ["error", "below"],
    'curly': ["error", "multi-or-nest"],
    "no-unused-vars": "warn",
    "vue/max-attributes-per-line": ["error", {
      "singleline": 5,
      "multiline": {
        "max": 5,
        "allowFirstLine": true
      }
		}],
		'no-underscore-dangle': 0,
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-indent": ["error", "tab", {
      "alignAttributesVertically": false
    }],
    "vue/no-unused-components": "warn",
    "vue/no-v-html": 0,

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
