<template>
  <div @click="fatherFn">
    <!-- vue对事件进行了修饰符设置, 在事件后面.修饰符名即可使用更多的功能 
				 .stop - 阻止事件冒泡
				 .prevent - 阻止默认行为
         .once - 程序运行期间, 只触发一次事件处理函数-->
    <button @click.stop="btn">.stop阻止事件冒泡</button>
    <a href="http://www.baidu.com" @click.prevent.stop>.prevent阻止默认行为</a>
    <!-- 修饰符是在事件身上的 once之后点击事件移除了 所以就没有了 -->
    <button @click.once.stop="btn1">.once程序运行期间, 只触发一次事件处理函数</button>
  </div>
</template>

<script>
export default {
  methods: {
    fatherFn() {
      console.log(1);
    },
    btn() {
      console.log(2);
    },
    btn1() {
      console.log(3);
    }
  }
}
</script>