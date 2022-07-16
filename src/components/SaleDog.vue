<template>
  <div class="box">
    <img :src="obj.dogImgUrl" alt="" />
    <p :style="{ backgroundColor: colorStr }" @click="btn">{{ obj.dogName }}</p>
  </div>
</template>

<script>
export default {
  props: ["obj"],
  data() {
    return {
      colorStr: "",
    };
  },
  methods: {
    btn() {
      this.colorStr = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;

      this.$emit("add", this.obj.dogName);
    },
  },
};
</script>

<style scoped>
.box {
  display: inline-block;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  text-align: center;
}
img {
  width: 100%;
  height: 80%;
}
</style>
