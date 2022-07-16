<template>
  <div>
    <Myproduct
      price="50元"
      title="好吃的口水鸡"
      msg="开业大酬宾, 全场8折"
    ></Myproduct>
    <Myproduct :price="price" :title="title" :msg="msg"></Myproduct>
    <Myproduct
      v-for="item in list"
      :key="item.id"
      :price="item.proprice"
      :title="item.proname"
      :msg="item.info"
    ></Myproduct>
    <Myproduct v-for="item in list" :key="item.id" :obj="item"></Myproduct>
    <!-- //Myproduct1 -->
  </div>
</template>

<script>
import Myproduct from "./components/MyProduct";
export default {
  components: {
    Myproduct,
  },
  data() {
    return {
      price: "150元",
      title: "超级臭的榴莲",
      msg: "开业大酬宾, 全场5折",
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    };
  },
};
</script>

<style></style>
