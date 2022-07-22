// webpack 打包入口文件
import Vue from "vue"; // 引入vue
import App from "./App.vue"; // 引入根组件
import router from "./router";
// import VueRouter from "vue-router";
// import find from "./views/Find.vue";
// import my from "./views/My.vue";
// import part from "./views/Part.vue";
// import NotFound from "./views/NotFound.vue";
// import recommend from "./views/Second/Recommend.vue";
// import ranking from "./views/Second/Ranking.vue";
// import songlist from "./views/Second/SongList.vue";
// // 配置一下路由关系
// const routes = [
//   {
//     path: "/",
//     redirect: "/find",
//   },
//   {
//     path: "/find",
//     component: find,
//     name: "find",
//     redirect: "/find/recommend",
//     children: [
//       {
//         path: "recommend",
//         component: recommend,
//       },
//       {
//         path: "ranking",
//         component: ranking,
//       },
//       {
//         path: "songlist",
//         component: songlist,
//       },
//     ],
//   },
//   {
//     path: "/my",
//     component: my,
//     name: "my",
//   },
//   {
//     path: "/part/:username",
//     component: part,
//     name: "part",
//   },
//   {
//     path: "*",
//     component: NotFound,
//   },
// ];
// // 生成路由管理者
// const router = new VueRouter({
//   routes,
//   mode: "history",
// });
// var isLogin = false;
// router.beforeEach((to, from, next) => {
//   if (to.path == "/my" && !isLogin) {
//     alert("请·登入·");
//     next(false);
//     return;
//   }
//   next();
// });
// 解决连续点击的报错 vue内部框架的问题 不是我的问题
// const VueRouterPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(to) {
//   return VueRouterPush.call(this, to).catch((err) => err);
// };
Vue.config.productionTip = false; // 提示语
// 在vue中，使用使用vue的插件，都需要调用Vue.use()
// Vue.use(VueRouter);
// 生成一个实例对象
new Vue({
  router,
  render: (h) => h(App), //render渲染app createElement创建元素
}).$mount("#app"); //挂载到index的文件中
