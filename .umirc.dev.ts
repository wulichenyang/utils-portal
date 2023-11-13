import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    ENV: 'dev',
    API_URL: `http://localhost:${process.env.PORT}`,
  },
});
