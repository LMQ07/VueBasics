import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import about from "../components/About.vue";
import concats from "../components/concats.vue";
import router from "../components/UIrouter.vue";
import allcats from "../views/homework/Allconcats.vue";
import alice from "../views/homework/Alice.vue";
import bob from "../views/homework/Bob.vue";
import blog from "../views/homework/blog.vue";
import fax from "../views/homework/fax.vue";
const routes = [
  { path: "/", redirect: "/router" },
  { path: "/router", component: router },
  {
    path: "/concats",
    component: concats,
    redirect: "/concats/allcats",
    children: [
      { path: "allcats", component: allcats },
      { path: "alice", component: alice },
      {
        path: "bob",
        component: bob,
        children: [
          { path: "blog", component: blog },
          { path: "fax", component: fax },
        ],
      },
    ],
  },
  { path: "/about", component: about },
];

export default new VueRouter({
  routes,
});
