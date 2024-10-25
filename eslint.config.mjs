import react from 'eslint-plugin-react';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		plugins: {
			react,
		},
		rules: {
			'react/react-in-jsx-scope': 'off', // Disable this rule
			'no-console': ['error', { allow: ['warn', 'error'] }],
		},
	},
	{ files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
];
