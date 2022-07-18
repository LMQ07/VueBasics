<template>
  <div id="app">
    <Life v-if="isShow"></Life>
    <button @click="isShow = false">销毁</button>
  </div>
</template>

<script>
// 引入其他子组件 就是组件的入口
import Life from "./components/Life.vue";

export default {
  name: "App",
  components: { Life },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style></style>
