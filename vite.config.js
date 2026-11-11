import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// base './' lets the site work under any GitHub Pages repo path.
export default defineConfig({ plugins: [react()], base: './' });
