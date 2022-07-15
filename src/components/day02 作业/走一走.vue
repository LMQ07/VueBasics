<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <button @click="move">走一走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["美女", "帅哥", "程序员"],
    }
  },
  methods: {
    move() {
      this.arr.push(this.arr[0])
      this.arr.shift()
    },
  },
}
</script>

<style></style>
