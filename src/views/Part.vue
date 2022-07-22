<template>
  <div>
    <h1>欢迎{{ this.$route.params.username }}的到来</h1>
    <p>关注明星</p>
    <p>发现精彩</p>
    <p>寻找伙伴</p>
    <p>加入我们</p>
    <p>人名: --</p>
  </div>
</template>

<script>
export default {
  name: "AA",
  created() {
    console.log(this.$route.params);
  },
};
</script>

<style></style>
