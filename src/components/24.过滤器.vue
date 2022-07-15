<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- 局部过滤器 -->
    <h1>{{ msg | toUp }}</h1>
    <!-- 全局过滤器 main.js -->
    <h1>{{ msg | toDown }}</h1>
    <!-- 局部加全局 -->
    <h2 v-bind:title="msg | toUp">{{ msg | toReverse("*") | toDown }}</h2>
  </div>
</template>

<script>
export default {
  // 过滤器的使用步骤
  // 1.注册
  // 1.1 局部
  // filters: {
  //   过滤器的名称(val) { // 需要被处理的数据
  //     return 处理后的数据
  //   }
  // }
  // 2.使用 插值表达式 v-bind表达式  ｜

  data() {
    return {
      msg: "Hello Vue",
    }
  },
  filters: {
    toUp(val) {
      return val.toUpperCase()
    },
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped></style>
