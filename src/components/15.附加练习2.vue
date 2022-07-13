<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img src="./assets/01.jpg" alt="" @mouseover="getUrl" @click="setBgc">
      <img src="./assets/02.jpg" alt="" @mouseover="getUrl" @click="setBgc">
      <img src="./assets/03.jpg" alt="" @mouseover="getUrl" @click="setBgc">
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="imgUrl" alt="" style="width:600px;height:auto;">
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import img from "./assets/01.jpg"
export default {
  data() {
    return {
      imgUrl: img
    }
  },
  methods: {
    getUrl(e) {
      // 这边的src路径已经经过处理了 所以才可以的
      console.log(e.target.src);
      this.imgUrl = e.target.src
    },
    setBgc(e) {
      document.body.style.background = `url(${e.target.src}) no-repeat 0 0/cover`
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.imglist {
  border: 2px solid red;
}

.imglist img {
  width: 200px;
  height: auto;
}

.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>