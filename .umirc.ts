import { defineConfig } from 'umi';
import theme from './src/utils/theme';

export default defineConfig({
  title: 'Registration',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/MainLayout',
      routes: [
        { path: '/', component: '@/pages/Registration' }
      ]
    }
  ],
  fastRefresh: {},
  locale: {
    default: 'ru-RU',
    baseNavigator: true,
  },
  theme,
  antd: false,
});
