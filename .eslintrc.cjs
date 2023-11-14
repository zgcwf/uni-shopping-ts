// 先安装：npm i -D eslint prettier eslint-plugin-vue @vue/eslint-config-prettier @vue/eslint-config-typescript @rushstack/eslint-patch @vue/tsconfig
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution') // 加载模块解析的修复补丁。
// 导出一个对象，该对象包含ESLint的配置信息。
module.exports = {
  root: true, // 指定该配置文件为根配置文件。
  extends: [ // 指定扩展的规则集，这里包括了一些规则的插件和扩展。
    'plugin:vue/vue3-essential', // Vue.js 3.x项目的基本规则。
    'eslint:recommended', // ESLint官方推荐的规则。
    '@vue/eslint-config-typescript', // Vue.js项目中使用TypeScript的规则。
    '@vue/eslint-config-prettier',// 与Prettier代码格式化工具一起使用的规则。
  ],
  // 小程序全局变量
  globals: { //指定全局变量，这些变量可以在代码中直接使用而不需要声明。
    uni: true,
    wx: true,
    WechatMiniprogram: true,
    getCurrentPages: true,
    getApp: true,
    UniApp: true,
    UniHelper: true,
    App: true,
    Page: true,
    Component: true,
    AnyObject: true,
  },
  parserOptions: { //指定解析器选项，这里将ECMAScript版本设置为最新。
    ecmaVersion: 'latest',
  },
  rules: { //指定自定义的规则，这里列出了一些自定义规则的配置。
    'prettier/prettier': [ //使用Prettier的规则进行代码格式化，包括使用单引号、省略分号、限制一行的最大字符数、使用逗号结尾等。
      'warn',// 表示如果代码与这些配置不符合，ESLint将发出警告。具体的配置包括：
      {
        singleQuote: true, // 使用单引号而不是双引号。
        semi: false, //不使用分号结尾。
        printWidth: 120, // 限制一行的字符数为100。
        trailingComma: 'all', // 使用逗号结尾的方式。
        endOfLine: 'auto', // 自动识别换行符。
      },
    ],
    'vue/multi-word-component-names': ['off'], // 禁用在Vue组件名中使用多个单词的规则。
    'vue/no-setup-props-destructure': ['off'], // 禁用在Vue组件props中使用解构赋值的规则。
    'vue/no-deprecated-html-element-is': ['off'], // 禁用使用已废弃的`is`属性的规则。
    '@typescript-eslint/no-unused-vars': ['off'], // 禁用未使用的TypeScript变量的规则。
  },
}
