// webpack 打包入口文件
import Vue from "vue"; // 引入vue
import App from "./App.vue"; // 引入根组件

Vue.config.productionTip = false; // 提示语

// 生成一个实例对象
new Vue({
  render: (h) => h(App), //render渲染app createElement创建元素
}).$mount("#app"); //挂载到index的文件中
