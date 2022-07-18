<template>
  <div id="app">
    <A></A>
    <B></B>
  </div>
</template>

<script>
// 引入其他子组件 就是组件的入口
import A from "./components/A.vue";
import B from "./components/B";
export default {
  name: "App",
  components: {
    A,
    B,
  },
};
</script>

<style></style>
