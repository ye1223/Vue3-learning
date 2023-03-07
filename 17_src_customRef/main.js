//引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数（不用new，直接调）
import { createApp } from 'vue'
 
import App from './App.vue'

// createApp(App).mount('#app')
const app = createApp(App)//!创建应用实例对象——app，类似于vue2的vm，但比vm要”轻量“
//console.log(app)
// 挂载
app.mount('#app')


