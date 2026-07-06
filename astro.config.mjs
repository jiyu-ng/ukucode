// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages 프로젝트 사이트: https://jiyu-ng.github.io/ukucode/
// (커스텀 도메인 생기면 site=그 도메인, base 제거)
export default defineConfig({
  site: 'https://jiyu-ng.github.io',
  base: '/ukucode',
  integrations: [sitemap()],
});
