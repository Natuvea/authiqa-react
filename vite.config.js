import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'] })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AuthiqaReact',
      fileName: 'authiqa-react',
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@authiqa/widget'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@authiqa/widget': 'Authiqa'
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
