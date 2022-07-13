<template>
  <div>
    <!-- 1. 事件触发, 无传值, 可以直接获取事件对象是 -->
    <a href="http://www.baidu.com" @click="stop">百度</a>
    <hr />
    <!-- 2. 事件触发, 传值, 需要手动传入$event -->
    <a href="http://www.taobao.com" @click="stop1(5, $event)">淘宝</a>
  </div>
</template>

<script>
export default {
  methods: {
    stop(e) {
      e.preventDefault();
    },
    stop1(val, e) {
      console.log(val);
      e.preventDefault()
    }
  }
};
</script>