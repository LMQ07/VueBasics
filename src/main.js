// webpack 打包入口文件
import Vue from "vue"; // 引入vue
import App from "./App.vue"; // 引入根组件
// 封装axios
import axios from "axios";

axios.defaults.baseURL = "http://123.57.109.30:3006";

Vue.prototype.$axios = axios; //挂载到原型链上

Vue.config.productionTip = false; // 提示语

// 生成一个实例对象
new Vue({
  render: (h) => h(App), //render渲染app createElement创建元素
}).$mount("#app"); //挂载到index的文件中
