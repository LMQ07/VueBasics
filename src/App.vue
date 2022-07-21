<template>
  <div id="app">
    <!-- <UseDirective></UseDirective> -->
    <!-- <UseDynamic></UseDynamic> -->
    <UseSlot></UseSlot>
  </div>
</template>

<script>
// 引入其他子组件 就是组件的入口
// import UseDirective from "./components/UseDirective.vue";
// import UseDynamic from "./views/01_UseDynamic.vue";
// import UseDynamic from "./views/02_UseDynamic.vue";
// import UseSlot from "./views/03_UseSlot.vue";
// import UseSlot from "./views/04_UseSlot.vue";
// import UseSlot from "./views/05_UseSlot.vue";
import UseSlot from "./views/06_UseTable.vue";
export default {
  name: "App",
  components: {
    UseSlot,
    // UseDynamic ,
    // UseDirective
  },
};
</script>

<style></style>
