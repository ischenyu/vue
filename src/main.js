//import './assets/main.css'

//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

import App from './App.vue'
import { createApp } from 'vue'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import './assets/main.css'

createApp(App).use(Layui).mount('#app')
