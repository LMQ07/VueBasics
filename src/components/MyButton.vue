<template>
  <div>
    <button
      title="默认按钮"
      :type="arr[index]"
      v-for="(item, index) in arr"
      :key="index"
    ></button>
  </div>
</template>

<script>
export default {
  props: ["arr"],
};
</script>

<style scoped></style>
