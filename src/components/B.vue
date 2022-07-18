<template>
  <div>BBBBB</div>
</template>

<script>
import EventBus from "./EventBus";
export default {
  name: "MyB",
  mounted() {
    // 需要得到的信息的组件中后面要接一个回调函数
    EventBus.$on("sendMsg", (val) => {
      console.log("我拿到了A的信息了", val);
    });
  },
};
</script>

<style></style>
