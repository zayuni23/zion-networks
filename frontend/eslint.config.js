import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignore the `dist` folder for linting
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // General JavaScript rules
      ...js.configs.recommended.rules,

      // React-specific rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      // React hooks rules
      ...reactHooks.configs.recommended.rules,

      // Customize or add specific rules
      'react/jsx-no-target-blank': 'warn', // Warn for target="_blank" without rel="noopener noreferrer"
      'react/prop-types': 'off', // Turn off PropTypes validation if you're using TypeScript
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+
      'react/jsx-key': 'warn', // Warn if a list element is missing a key
      'react/jsx-uses-react': 'off', // Not needed for React 17+
      'react-hooks/rules-of-hooks': 'error', // Ensure hooks follow the rules
      'react-hooks/exhaustive-deps': 'warn', // Check dependencies of useEffect
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Best practices and code quality
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with `_`
      'no-console': 'warn', // Warn about console usage
      'no-debugger': 'error', // Disallow debugger usage
      'prefer-const': 'warn', // Encourage usage of `const` over `let` where possible
      'eqeqeq': ['error', 'always'], // Enforce strict equality
      'curly': 'error', // Enforce consistent brace style for control statements
    },
  },
];
