module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "vue/html-self-closing": "off",
    "semi": "off",
    "padded-blocks": "off",
    "comma-spacing": "off",
    "no-multiple-empty-lines": "off",
    "vue/singleline-html-element-content-newline": "off",
    "space-before-function-paren": "off",
    "no-trailing-spaces": "off",
    "vue/no-multi-spaces": "off",
    "vue/mustache-interpolation-spacing": "off",
    "arrow-parens": "off",
    "quotes": ["error", "double"]
  }
}
