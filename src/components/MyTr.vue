<template>
  <tbody>
    <tr v-for="(item, index) in goodList" :key="item.id">
      <th>
        <input type="checkbox" v-model="item.checked" @change="changeCheck" />
      </th>
      <th>{{ item.name }}</th>
      <th>{{ item.price }}</th>
      <th>
        <button @click="reduce(index)" :disabled="item.num == 0">-</button
        >{{ item.num }}
        <button @click="add(index)">+</button>
      </th>
      <th>{{ item.price * item.num }}</th>
      <th><button @click="del(index)">删除</button></th>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: ["goodList"],
  methods: {
    changeCheck() {
      this.$emit("checkAll", this.goodList);
    },
    add(index) {
      this.$emit("addNum", index);
    },
    reduce(index) {
      this.$emit("reduceNum", index);
    },
    del(index) {
      this.$emit("deleteList", index);
    },
  },
};
</script>

<style></style>
