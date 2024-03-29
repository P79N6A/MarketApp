// module.exports = {
//   root: true,
//   extends: '@react-native-community',
// };
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'standard'],
  plugins: ['react'],
  // 全局变量
  globals: {
    process: true,
    __dirname: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    ecmaVersion: 7
  },
  // 解决Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration.
  settings: {
    react: {
      version: 'detect'
    }
  },
  /* 
    "off" or 0 关闭规则
    "warn" or 1 打开规则，不符合出现警告提示
    "error" or 2 打开规则，不符合出现错误提示
  */
  rules: {
    // 单引号
    quotes: [2, 'single'],
    // 缩进，switch case缩进问题
    indent: [2, 2, { SwitchCase: 1 }],
    // 分号不检查
    semi: 0,
    // 对var警告
    'no-var': 2,
    // standard规范中函数定义时括号前面要有空格（禁用此规则）
    'space-before-function-paren': [0, 'always'],
    // react proptype不检查
    'react/prop-types': 0,
  }
}