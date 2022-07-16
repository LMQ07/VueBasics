<template>
  <div>
    <el-button :arr="arr"></el-button>
  </div>
</template>

<script>
import MyButton from "./components/MyButton";
export default {
  components: {
    "el-button": MyButton,
  },
  data() {
    return {
      arr: ["primary", "main", "success", "information", "warning", "danger"],
    };
  },
};
</script>

<style></style>
<!-- <el-button @click="" title="默认按钮"></el-button>
<el-button title="默认按钮" type="primary"></el-button>
<el-button title="默认按钮" type="success"></el-button> -->
