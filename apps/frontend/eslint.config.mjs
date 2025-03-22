import nx from '@nx/eslint-plugin';
import ts from '@typescript-eslint/parser';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: ts,  // ✅ Correct placement inside `languageOptions`
      parserOptions: {
        project: 'tsconfig.base.json',
        sourceType: 'module',
      },
    },
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
      '@typescript-eslint/no-explicit-any': ['error'], // ❌ Disallow `any`
      '@typescript-eslint/no-unused-vars': ['error'], // ✅ No unused variables
      // '@typescript-eslint/explicit-module-boundary-types': ['error']
      // '@typescript-eslint/explicit-function-return-type': 'error',
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {
     
    },
  },
];
