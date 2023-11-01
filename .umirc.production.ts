import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    ENV: 'production',
    API_URL: 'https://api.wulichenyang.github.io',
  },
  base: `/${process.env.PROJECT_NAME}/`,
  publicPath: `/${process.env.PROJECT_NAME}/`,
  favicons: [`/${process.env.PROJECT_NAME}/favicon.ico`],
});
