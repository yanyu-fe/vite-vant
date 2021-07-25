import { createApp } from 'vue'
import App from './App.vue'
import "@/plugins/rem"
import { vantUI } from "@/plugins/vantUI";
import "normalize.css";

// 实例化vue3
const app = createApp(App);

// 注册vantUI
vantUI(app);

// 节点挂载
app.mount('#app')
