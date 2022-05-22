import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)
    .use(router)
    .use(Antd)

app.mount('#app')
