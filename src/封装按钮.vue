<template>
  <div>
    <!-- <el-button :arr="arr"></el-button> -->
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>
import MyButton from "./components/MyButton";
export default {
  components: {
    "el-button": MyButton,
  },
  data() {
    return {};
  },
  methods: {
    msg() {
      console.log(234);
    },
  },
};
</script>

<style></style>
<!-- <el-button @click="" title="默认按钮"></el-button>
<el-button title="默认按钮" type="primary"></el-button>
<el-button title="默认按钮" type="success"></el-button> -->
