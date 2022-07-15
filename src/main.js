// webpack 打包入口文件
import Vue from "vue" // 引入vue
import App from "./App.vue" // 引入根组件

Vue.config.productionTip = false // 提示语
// 全局过滤器
Vue.filter("toDown", (val) => {
  return val.toLowerCase()
})
Vue.filter("toReverse", (val, a = "") => {
  return val.split("").reverse().join(a)
})
// 引入bootstrap的样式
import "bootstrap/dist/css/bootstrap.css"
// 生成一个实例对象
new Vue({
  render: (h) => h(App), //render渲染app createElement创建元素
}).$mount("#app") //挂载到index的文件中
