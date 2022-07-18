<template>
  <div id="app">
    <!-- <MyButton title="默认按钮" :type="111"></MyButton> -->
    {{ n }}
    <MyButton title="主要按钮" type="primary" @click="btn"></MyButton>
    <MyButton title="成功按钮" type="success" @click="n++"></MyButton>
    <MyButton title="警告按钮" type="warning" v-on:click="n--"></MyButton>
    <MyButton title="危险按钮" type="danger" @keyup="fn"></MyButton>
  </div>
</template>

<script>
// 引入其他子组件 就是组件的入口
import MyButton from "./components/Button.vue";
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
    btn() {
      console.log(111);
    },
    fn(e) {
      // console.log(e.target);
      if (e.keyCode == 13) {
        console.log(2);
      }
    },
  },
};
</script>

<style></style>
