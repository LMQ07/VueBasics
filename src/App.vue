<!-- 发现音乐 -->
<!-- <template>
  <div>
    <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part"> 朋友</router-link>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn(val, targetName) {
      this.$router.push({
        path: val,
        // name: targetName,
        query: {
          id: 123,
        },
        params: {
          age: 18,
        },
      });
    },
  },
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  /* border: 1px solid black; */
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
.router-link-active {
  background-color: rgb(67, 118, 249) !important;
}
</style> -->

<!-- hash的用法 -->
<!-- <template>
  <div>
    <h1>App组件</h1>
    <a href="#/home">首页</a>&nbsp; <a href="#/movie">电影</a>&nbsp;
    <a href="#/about">关于</a>&nbsp;
    <component :is="comName"></component>
  </div>
</template>

<script>
import Movie from "./views/Find.vue";
import Home from "./views/My.vue";
import About from "./views/Part";
export default {
  name: "DemoApp",
  data() {
    return {
      comName: "",
    };
  },
  components: {
    Movie,
    Home,
    About,
  },
  mounted() {
    const that = this;
    // hash的执行步骤
    window.onhashchange = () => {
      console.log(location.hash);
      switch (location.hash) {
        case "#/movie":
          this.comName = "Movie";
          break;
        case "#/home":
          this.comName = "Home";
          break;
        case "#/about":
          this.comName = "About";
          break;
      }
    };
    // window.onhashchange = function () {
    //   console.log("===", location.hash);
    //   // 有路径 找组件
    //   // #/movie
    //   // #/home
    //   // #/about
    //   switch (location.hash) {
    //     case "#/movie":
    //       that.comName = "Movie";
    //       break;
    //     case "#/home":
    //       that.comName = "Home";
    //       break;
    //     case "#/about":
    //       that.comName = "About";
    //       break;
    //   }
    // };
  },

  methods: {},
};
</script>

<style scoped></style> -->
<!-- v-model的作用 -->
<!-- <template>
  <div>
    <h1>v-model在自定义组件上的使用</h1> -->
<!-- v-model 用在一个组件上 会默认被解析成 
    1. 名为 value 的属性 
    2. 名为 input 的事件 -->
<!-- <BaseInput v-model="test"></BaseInput> -->
<!-- <BaseInput v-bind:value="test" @input="evnt='123'"></BaseInput> -->
<!-- </div>
</template> -->

<!-- <script>
import BaseInput from "./extends/child/base-input.vue";
export default {
  name: "Demo02VModel",

  data() {
    return {
      test: "",
      checked: 0,
    };
  },
  components: {
    BaseInput,
  },
};
</script>

<style lang="css" scoped></style> -->
<!-- homework -->
<template>
  <div>
    <router-link to="/router">Ui router</router-link>
    <router-link to="/concats">concats</router-link>
    <router-link to="/about">about</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  margin-right: 15px;
  text-decoration: none;
  color: black;
}
.router-link-exact-active {
  background-color: pink !important;
}
.router-link-active {
  background-color: skyblue;
}
</style>
