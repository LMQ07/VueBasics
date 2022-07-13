<template>
  <div id="app">
    <!-- 2. 值 -> 标签原生属性上 -->
    <!-- 语法: v-bind:原生属性名="vue变量" -->
    <!-- 语法: :原生属性名="vue变量" -->
    <a :href="hrefUrl">去百度</a>
    <!-- 图片在html以及css中是可以直接用路径的 -->
    <img src="./assets/logo.png" alt="">
    <img :src="imgUrl" alt="">
  </div>
</template>

<script>
// 引入其他子组件 就是组件的入口
import img from "./assets/logo.png"

export default {
  name: 'App',
  data() {
    return {
      hrefUrl: "https://m.baidu.com/",
      //这边想要使用图片 可以先引入 然后再使用 如果直接用html那种用法 会报404错误
      imgUrl: img
    }
  },
}
</script>

<style>
</style>
