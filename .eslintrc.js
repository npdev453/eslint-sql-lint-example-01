module.exports = {
    plugins: ['sql', 'unicorn'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'unicorn/template-indent': [
            'warn', {
                indent: 4,
                tags: ['sql']
            }
        ],
        'sql/format': [
            'warn',
            {
                ignoreBaseIndent: true,
                ignoreExpressions: false,
                ignoreInline: false,
                ignoreTagless: true
            }, {
                commaBreak: true,
                keywordCase: 'uppercase'
            }
        ]
    }
};
