<template>
  <div>
    {{ msg }}
    <button @click="btn">click me</button>
  </div>
</template>

<script>
import EventBus from "./EventBus";
export default {
  name: "MyA",
  data() {
    return {
      msg: "我是A的信息",
    };
  },
  methods: {
    btn() {
      // 第三方js 创建了一个vue 然后再需要传信息的那个组件里面触发那个事件 $emit
      EventBus.$emit("sendMsg", this.msg);
    },
  },
};
</script>

<style></style>
