<template>
  <div>
    <ul>
      <li>
        <span @click="btn('/concats/allcats')"> All concats</span>
      </li>
      <li>
        <span @click="btn('/concats/alice')"> Alice</span>
      </li>
      <li>
        <span @click="btn('/concats/bob')"> Bob</span>
      </li>
    </ul>
    <button @click="random">随机按钮</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    random() {
      const arr = ["/concats/allcats", "/concats/alice", "/concats/bob"];
      const num = Math.floor(Math.random() * 3);
      this.$router.push(arr[num]);
    },
    btn(val) {
      this.$router.push(val);
    },
  },
};
</script>

<style></style>
