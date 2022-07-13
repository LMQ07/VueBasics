<template>
  <div id="app">
    <!-- 插值语法 -->
    {{ msg }}
    <!-- 三元表达式 只要有返回值 -->
    <h2>{{ obj.name }}</h2>
    <h4>{{ obj.age > 18 ? "成年" : "未成年" }}</h4>
  </div>
</template>

<script>
// 引入其他子组件 就是组件的入口


export default {
  name: 'App',
  data() {
    return {
      msg: "我是msg的信息",
      obj: {
        name: "lmq",
        age: 17
      }
    }
  },
}
</script>

<style>
</style>
