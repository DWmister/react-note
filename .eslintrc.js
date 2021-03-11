module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  parser: 'babel-eslint',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    indent: ['error', 2]
  },
  // 共享设置
  settings: {
    react: {
      // detect 自动匹配所安装的react版本
      version: 'detect'
    }
  }
}
