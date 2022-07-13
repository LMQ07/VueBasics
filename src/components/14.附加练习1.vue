<template>
  <div>
    <div>
      <span>选择所在地区：</span>
      <input type="radio" value="中国大陆" name="area" v-model="area"> 中国大陆
      <input type="radio" value="中国香港" name="area" v-model="area"> 中国香港
    </div>
    <div>
      手机号码：
      <input type="text" name="phone" v-model="phone">
    </div>
    <div>
      年龄：
      <input type="text" name="age" v-model.number="age">
    </div>
    <div>
      密码：
      <input type="password" name="pwd" v-model="pwd">
    </div>
    <div>
      爱好：
      <input type="checkbox" value="看书" name="hobby" v-model="hobby">看书
      <input type="checkbox" value="学习" name="hobby" v-model="hobby">学习
      <input type="checkbox" value="写代码" name="hobby" v-model="hobby">写代码
      <input type="checkbox" value="游戏" name="hobby" v-model="hobby">游戏
    </div>
    <div>
      <input type="checkbox" v-model="remember">记住密码
    </div>
    =====================
    <p> 我来自：{{ area }}</p>
    <p>手机号码：{{ phone }}</p>
    <p>年龄是：{{ age }}</p>
    <p>密码是：{{ pwd }}</p>
    <p>爱好是：{{ hobby.join("*") }}</p>
    <p>是否记住密码：{{ remember ? "记住" : "忘记" }}</p>
    <p>是否记住密码：{{ { true: "记住", false: "忘记" }[remember] }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      area: "中国大陆",
      phone: "",
      age: "",
      pwd: "",
      hobby: ["看书", "学习", "写代码"],
      remember: true
    }
  }
}
</script>

<style lang="less">
</style>