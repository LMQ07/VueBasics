<template>
  <div>
    <span>用户信息： {{ $route.query.username }} {{ $route.query.age }}</span>
    <p>我的收藏</p>
    <p>我的历史记录</p>
  </div>
</template>

<script>
export default {
  name: "AA",
  created() {
    console.log(this.$route.query);
    console.log(this.$router.currentRoute.query);
  },
};
</script>

<style></style>
