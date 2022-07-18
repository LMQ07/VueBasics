<template>
  <button
    :class="`one-button-${type}`"
    @click="fn"
    @mouseenter="fn2"
    @keyup="fn3"
  >
    {{ title }}
  </button>
</template>

<script>
// 需求： 要求 title 和背景颜色自定义
export default {
  name: "MyButton",
  props: {
    title: String,
    type: {
      type: String,
      default: "primary",
      require: true,
      // 检测传进来的值是否符合要求
      validator: (val) => {
        return ["primary", "success", "warning", "danger"].includes(val); //include 判断数组中是否这个值 返回的是布尔值
      },
    },
  },
  methods: {
    fn() {
      this.$emit("click");
    },
    fn2() {
      this.$emit("mouseenter");
    },
    fn3(e) {
      this.$emit("keyup", e);
    },
  },
};
</script>

<style scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
}
.one-button-primary {
  background-color: skyblue;
}
.one-button-success {
  background-color: hotpink;
}
.one-button-warning {
  background-color: yellowgreen;
}
.one-button-danger {
  background-color: red;
}
</style>
