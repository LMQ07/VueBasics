<!-- 代码演示 -->
<template>
  <div>
    购物车商品总价：
    <!-- 商品是否大于500 符合条件可使用400的优惠券 否则不可使用 -->
    {{ totalPrice }}
    {{ getSum() }}
    {{ totalPrice }}
    {{ getSum() }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 5,
      price: 98,
      coupon: 400,
    };
  },
  methods: {
    getSum() {
      //这个只要调用就会执行一次
      console.log(111);
      return this.total * this.price >= 500
        ? this.total * this.price - this.coupon
        : this.total * this.price;
    },
  },
  computed: {
    totalPrice() {
      // 这个只会计算一次就可以了 只要依赖项不变就可以在缓存中拿
      console.log("计算");
      return this.total * this.price >= 500
        ? this.total * this.price - this.coupon
        : this.total * this.price;
    },
  },
};
</script>
