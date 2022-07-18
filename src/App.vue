<template>
  <div id="app">
    <!-- <MyButton title="默认按钮" :type="111"></MyButton> -->
    {{ n }}
    <MyButton title="主要按钮" type="primary" @click="add"></MyButton>
    <MyButton title="成功按钮" type="success" @keyup="btn"></MyButton>
    <MyButton title="警告按钮" type="warning" @mouseenter="fn"></MyButton>
    <MyButton title="危险按钮" type="danger" @click="n += 5"></MyButton>
  </div>
</template>

<script>
// 引入其他子组件 就是组件的入口
import MyButton from "./components/MyButton.vue";
export default {
  name: "App",
  data() {
    return {
      n: 1,
    };
  },
  components: {
    MyButton,
  },
  methods: {
    add() {
      this.n++;
    },
    btn(e) {
      if (e.keyCode === 13) {
        alert(1);
      }
    },
    fn() {
      this.n--;
    },
  },
};
</script>

<style></style>
