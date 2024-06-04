import react from '@vitejs/plugin-react';
import MillionLint from 'million/compiler';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [[MillionLint.vite()], react()],
});
