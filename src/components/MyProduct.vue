<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}</p>
    <p>{{ msg }}</p>
    <button @click="discount">砍价</button>
  </div>
</template>

<script>
export default {
  props: ["title", "price", "msg", "index"],
  methods: {
    discount() {
      this.$emit("discount", this.index);
    },
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
