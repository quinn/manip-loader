module.exports = {
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:flowtype/recommended'],
	root:    true,
	plugins: ['react', 'flowtype'],
	env:     {
		browser:  true,
		es6:      true,
		commonjs: true,
		node:     true,
	},
	globals: {
		// Bugsnag: false,
	},
	parser:        'babel-eslint',
	parserOptions: {
		ecmaVersion:  8,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx:                          true,
			classes:                      true,
		},
		sourceType: 'module'
	},

	settings: {
		flowtype: {
			onlyFilesWithFlowAnnotation: false
		}
	},

	rules: {
		// Errors
		'block-scoped-var':            ['error'],
		'class-methods-use-this':      ['error'],
		'comma-spacing':               ['error'],
		'computed-property-spacing':   ['error', 'never'],
		'curly':                       ['error', 'multi'],
		'dot-location':                ['error', 'property'],
		'dot-notation':                ['error'],
		'eol-last':                    ['error', 'always'],
		'func-call-spacing':           ['error', 'never'],
		'indent':                      ['error', 'tab'],
		'key-spacing':                 ['error', { align: 'value' }],
		'keyword-spacing':             ['error'],
		'linebreak-style':             ['error', 'unix'],
		'no-else-return':              ['error'],
		'no-extra-bind':               ['error'],
		'no-extra-parens':             ['error', 'all'],
		'no-implicit-coercion':        ['error', { allow: ['!!'] }],
		'no-lone-blocks':              ['error'],
		'no-loop-func':                ['error'],
		'no-return-assign':            ['error'],
		'no-unsafe-negation':          ['error'],
		'no-useless-concat':           ['error'],
		'object-curly-spacing':        ['error', 'always'],
		'operator-linebreak':          ['error', 'before'],
		'prefer-arrow-callback':       ['error'],
		'prefer-template':             ['error'],
		'quotes':                      ['error', 'single'],
		'semi':                        ['error', 'never'],
		'space-before-blocks':         ['error'],
		'space-before-function-paren': ['error'],
		'space-in-parens':             ['error', 'never'],
		'space-infix-ops':             ['error'],
		'spaced-comment':              ['error', 'always'],
		'template-curly-spacing':      ['error', 'never'],
		'vars-on-top':                 ['error'],
		'brace-style':                 ['error', '1tbs', { allowSingleLine: true }],
		'consistent-return':           ['error'],
		'padded-blocks':               ['error', 'never'],
		'no-trailing-spaces':          ['error'],

		// Warnings
		'camelcase':        ['warn'],
		'no-magic-numbers': ['warn', { ignore: [-1, 0, 1, 2, 3, 4] }],
	}
}
