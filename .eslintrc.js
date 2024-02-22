module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', 'tsx'] },
        ],
        'import/no-unresolved': 'off',
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'import/prefer-default-export': 'off',
        indent: [2, 4],
        'react/require-default-props': 'off',
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
        'no-undef': 'off',
        'import/no-extraneous-dependencies': 'off',
        'max-len': ['error', { ignoreComments: true, code: 220 }],
        'no-restricted-globals': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'typescript-eslint/no-var-requires': 'off',
        'no-plusplus': 'off',
        'jsx-a11y/img-redundant-alt': 'off',
        '@typescript-eslint/no-empty-interface': 'off',

    },
};
