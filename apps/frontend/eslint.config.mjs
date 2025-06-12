import nx from '@nx/eslint-plugin';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      'no-console': ['warn'],
      eqeqeq: ['error', 'smart'],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      import: eslintPluginImport,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'never',
        },
      ],
      '@typescript-eslint/no-explicit-any': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': ['error'],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'signature',
            ['decorated-field', 'get', 'set'],
            'field',
            'constructor',
            'decorated-method',
            'method',
          ],
        },
      ],
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-inferrable-types': [
        'warn',
        { ignoreParameters: true },
      ],
      '@typescript-eslint/no-unsafe-member-access': ['error'],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowTernary: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-cycle': 'error',
      'import/no-duplicates': 'error',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': 'error',
    },
    settings: {
      'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
      'import/resolver': {
        typescript: true,
      },
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {
       '@angular-eslint/template/no-any': 'error',
    '@angular-eslint/template/banana-in-box': 'error', // Ensures [(expr)] syntax is correct
    '@angular-eslint/template/cyclomatic-complexity': ['warn', { maxComplexity: 5 }],
    '@angular-eslint/template/no-negated-async': 'warn',

    // Best practices
    '@angular-eslint/template/conditional-complexity': ['warn', { maxComplexity: 3 }],
    '@angular-eslint/template/i18n': 'off', // Set to 'error' if using Angular i18n
    '@angular-eslint/template/no-positive-tabindex': 'warn',

    // Formatting preferences
    '@angular-eslint/template/prefer-self-closing-tags': 'warn',
    // '@angular-eslint/template/no-call-expression': 'error', // Prevent function calls in templates

    // Naming conventions
    '@angular-eslint/template/prefer-ngsrc': 'warn', // Helps with lazy-loaded images
    },
  },
];
