<template>
  <div class="box">
    <div v-for="(item, index) in arr" :key="index">
      {{ item }}
      <input type="checkbox" :value="item" v-model="newArr" />
    </div>
    <h1>选中数字的和：{{ getSum }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      newArr: [],
    };
  },
  computed: {
    getSum() {
      return this.newArr.reduce((pre, next) => {
        pre += next;
        return pre;
      }, 0);
    },
  },
};
</script>

<style>
.box {
  display: flex;
}
</style>
