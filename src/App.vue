<template>
  <div id="app">
    <!-- <Life v-if="isShow"></Life>
    <button @click="isShow = false">销毁</button> -->
    <!-- <UseAxios></UseAxios> -->
    <!-- <More></More> -->
    <!-- <Tick></Tick> -->
    <ComNameHaHa></ComNameHaHa>
  </div>
</template>

<script>
// 引入其他子组件 就是组件的入口
// import Life from "./components/Life.vue";
// import UseAxios from "./components/UseAxios.vue";
// import More from "./components/More.vue";
// import Tick from "./components/Tick.vue";
import Com from "./components/Com.vue";
export default {
  name: "App",
  components: {
    //  Life
    // UseAxios,
    // More,
    // Tick,
    [Com.name]: Com,
  },
  data() {
    return {
      // isShow: true,
    };
  },
  methods: {},
};
</script>

<style></style>
