import { defineConfig } from 'vite';
import { homepage } from './package.json';

export default defineConfig({
  base: homepage,
});
