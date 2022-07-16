<template>
  <div class="container">
    <div>
      <SaleDog
        v-for="(item, index) in arr"
        :key="index"
        :obj="item"
        v-on:add="add"
      ></SaleDog>
    </div>
    <p>我喜欢的狗狗如下</p>
    <ul>
      <li v-for="(item, index) in newArr" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import SaleDog from "./components/SaleDog";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/1.png";
import img5 from "./img/2.png";
import img6 from "./img/3.png";
export default {
  data() {
    return {
      arr: [
        {
          dogImgUrl: img1,
          dogName: "博美",
        },
        {
          dogImgUrl: img2,
          dogName: "泰迪",
        },
        {
          dogImgUrl: img3,
          dogName: "金毛",
        },
        {
          dogImgUrl: img4,
          dogName: "哈士奇",
        },
        {
          dogImgUrl: img5,
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl: img6,
          dogName: "萨摩耶",
        },
      ],
      newArr: [],
    };
  },
  components: {
    SaleDog,
  },
  methods: {
    add(val) {
      console.log(val);
      this.newArr.push(val);
    },
  },
};
</script>

<style>
.container {
  width: 940px;
}
</style>
