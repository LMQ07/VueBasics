<template>
  <button
    :class="`one-button-${type}`"
    @click="fn"
    @keyup="fn2"
    @mouseenter="fn3"
  >
    {{ title }}
  </button>
</template>

<script>
// 需求： 要求 title 和背景颜色自定义
export default {
  name: "MyButton",
  props: {
    title: {
      typeof: String,
    },
    type: {
      typeof: String,
      default: "primary",
      require: true,
      validator: (val) => {
        return ["primary", "success", "warning", "danger"].includes(val); //返回布尔值 去判断是否有 没有就报错
      },
    },
  },
  methods: {
    fn() {
      this.$emit("click");
    },
    fn2(e) {
      this.$emit("keyup", e);
    },
    fn3() {
      this.$emit("mouseenter");
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
