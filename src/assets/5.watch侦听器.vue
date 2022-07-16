<template>
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="msg.a" />
    <button @click="msg.a++">点击后加1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      msg: {
        a: 1,
      },
    };
  },
  computed: {
    cloneMsg() {
      // 深度拷贝一下
      return JSON.parse(JSON.stringify(this.msg));
    },
  },
  // 目标: 侦听到name值的改变
  /*
  语法:
    watch: {
      变量名 (newVal, oldVal){
        // 变量名对应值改变这里自动触发
        // newVal 是改变之后的值
        // oldVal 是改变之前的值
      }
    }
  */
  watch: {
    // newVal: 当前最新值
    // oldVal: 上一刻值 简单数据类型可以简写 复杂数据类型就需要写全
    name(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
    // "要侦听的属性名": {
    //     immediate: true, // 立即执行
    //     deep: true, // 深度侦听复杂类型内变化
    //     handler (newVal, oldVal) {

    //     }
    // }
    msg: {
      deep: true, //开启深度监听
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
    },
    // 如果监听的是复杂数据类型里面的某一个属性的话就可以
    "msg.a"(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
    // 因为前面拷贝后两个地址是不一样的 所以不会互相影响
    cloneMsg: {
      deep: true,
      handler(val, oldVal) {
        console.log(val, oldVal);
      },
    },
  },
};
</script>

<style></style>
