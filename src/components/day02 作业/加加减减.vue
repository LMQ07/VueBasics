<template>
  <div id="app">
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}
        <button @click="remove(index)">删除</button>
      </li>
    </ul>
    <button @click="add">生成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [3, 5, 7, 9],
    }
  },
  methods: {
    remove(val) {
      this.arr.splice(val, 1)
    },
    add() {
      const num = Math.floor(Math.random() * 20)
      console.log(num)
      this.arr.push(num)
    },
  },
}
</script>

<style></style>
