import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';

const config = [
  { ignores: ['frontend/.next/**', '.next/**', 'node_modules/**', 'next-env.d.ts'] },
  { settings: { next: { rootDir: 'frontend/' } } },
  ...nextVitals,
  ...nextTypescript,
  prettier,
];

export default config;
