<template>
  <div>
    <p>学习生命周期 - 看控制台打印</p>
    <p id="myP">{{ msg }}</p>
    <ul id="myUL">
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <button @click="arr.push(1000)">点击末尾加值</button>
  </div>
</template>

<script>
export default {
  name: "LifeAxiosLife",

  data() {
    return {
      msg: "Hello Vue!",
      arr: [1, 2, 3, 4],
      isShow: true,
      timer: null,
    };
  },
  // 创建的钩子函数
  // 此刻这一步还没有开始数据代理 只是VUE内部的事件以及生命周期开启
  beforeCreate() {
    this.ad = "我能改变数据吗？我不能";
    console.log(1111, this.msg); //this.msg此时就是undefined
  },
  // 这一步数据代理以及methods里面的事件已经可以获取到了 所以咱们初始化的时候适合写在这一步中
  // 应用场景： 数据初始化（实际开发中用的很多）
  created() {
    this.msg = "我能改变数据吗？我能";
    console.log(2222, this.msg);
  },
  // 挂载前 页面出现的都是未编译的dom结构 这个时候是不能对dom结构进行操作
  beforeMount() {
    console.log(document.querySelector("#myP"));
    console.log(333);
  },
  // 挂载后 可以获取到dom结构进行操作 一般都是 开启定时器，订阅消息，绑定自定义事件 发送网络请求等
  mounted() {
    console.log(document.querySelector("#myP"));
    console.log(444);
    this.msg = "mouted之后的包括mouted改变数据才能触发下面的数据更新的操作";
    this.timer = setInterval(() => {
      console.log("======");
    }, 1000);
  },
  // 此刻的数据是最新的，但是页面视图里面的数据还是旧的
  beforeUpdate() {
    console.log(555);
    console.log(document.querySelectorAll("#myUL>li")[4]); // undefined
    console.log(this.arr); //数据是最新的
  },
  // 经过了新旧数据的对比，然后数据以及视图里面的数据都是最新的
  updated() {
    console.log(document.querySelectorAll("li"));
    console.log(666);
  },
  // 销毁前 通常是用来取消订阅 以及消除定时器等操作
  beforeDestroy() {
    console.log(777);
    clearInterval(this.timer);
  },
  // 销毁了
  destroyed() {
    console.log(888);
  },
};
</script>
