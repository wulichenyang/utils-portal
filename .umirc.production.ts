import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    ENV: 'production',
  },
  base: `/${process.env.PROJECT_NAME}/`,
  publicPath: `/${process.env.PROJECT_NAME}/`,
  favicons: [`/${process.env.PROJECT_NAME}/favicon.ico`],
});
