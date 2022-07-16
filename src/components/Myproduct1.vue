<template>
  <div class="my-product">
    <h3>标题: {{ obj.proname }}</h3>
    <p>价格: {{ obj.proprice }}</p>
    <p>{{ obj.info }}</p>
    <button @click="discount(obj)">砍价</button>
  </div>
</template>

<script>
export default {
  // props: ["obj"],
  props: {
    obj: {
      type: Object,
      require: true, //必须传值
      default: () => ({}), //没有传值的时候 默认给的就是空对象
    },
  },
  methods: {
    discount(val) {
      val.proprice--;
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
