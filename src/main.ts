import { createApp } from 'vue';
import App from './App.vue';
import 'uno.css';
import '@unocss/reset/eric-meyer.css'; // unocss提供的浏览器默认样式重置
import ElementPlus from 'element-plus';
import * as Icons from '@element-plus/icons-vue';
import pinia from '@/stores';
import router from '@/routers';

const app = createApp(App);

Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

app
  .use(ElementPlus)
  /* .use(directives) */
  .use(router) /* .use(I18n) */
  .use(pinia)
  .mount('#app');
