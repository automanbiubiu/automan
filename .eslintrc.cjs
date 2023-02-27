module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:vue/vue3-recommended',
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        // 校验规则列表
        'prettier/prettier': 'error',
        'no-console': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off'
    }
}
