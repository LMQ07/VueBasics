<template>
  <div id="app">
    <UseDirective></UseDirective>
  </div>
</template>

<script>
// 引入其他子组件 就是组件的入口
import UseDirective from "./components/UseDirective.vue";

export default {
  name: "App",
  components: { UseDirective },
};
</script>

<style></style>
