<template>
  <div>
    <!-- 1. 变量准备-静态页面铺设 -->
    <h1>{{ msg }}</h1>
    <!-- 2. 绑定点击事件 -->
    <button @click="reverse">逆转世界</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello, World"
    }
  },
  methods: {
    reverse() {
      // 首先将字符串变成数组 split 然后利用数组里面的reverse用法 会改变原数组的排序
      // 最后将数组改变成字符串
      let arr = this.msg.split("")
      console.log(arr);
      arr.reverse()
      console.log(arr);
      this.msg = arr.join("")
      // this.msg = this.msg.split("").reverse().join("")
    }
  }
}
</script>