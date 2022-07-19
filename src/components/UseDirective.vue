<template>
  <div>
    <input v-goFocus v-number="qwe" v-model="qwe" />
    <p v-color="colorStr">修改文字颜色</p>
    <button @click="colorStr = 'red'">click</button>
  </div>
</template>
1
<script>
// 自定义指令的使用
// 1.注册
// 1.1 全局 Vue.directive('指令名称', {})
// 1.2 局部 directives: {}

// 2.使用 v-指令名称

// 注意:
// inserted方法 - 指令所在标签, 被插入到网页上触发(一次)
// update方法 - 指令对应数据/标签更新时, 此方法执行
// /[^\d.]/g

// 需求：
// 1. 实现表单自动获取焦点的自定义指令
// 2. 实现一个修改标签颜色的指令
// 3. 解决 v-model.number修饰符的问题
export default {
  name: "UseDirective",
  data() {
    return {
      colorStr: "green",
      qwe: "121232",
    };
  },
  // directives: {
  //   指令的名称: {
  //     inserted(el) {
  //       // el 指令所在标签
  //       // 指令所在标签, 被插入到网页上触发(一次)
  //     },
  //   },
  // },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
    color: {
      // inserted方法 - 指令所在标签, 被插入到网页上触发(一次)
      inserted(el, binding) {
        // console.log(this);
        // console.log(binding);
        el.style.color = binding.value;
      },
      // update方法 - 指令对应数据/标签更新时, 此方法执行
      update(el, binding) {
        // console.log(binding);
        // console.log(this);
        el.style.color = binding.value;
      },
    },
    number: {
      inserted(el, binding, vNode) {
        el.value = binding.value.replace(/[^\d.]/g, "");
        vNode.context[binding.expression] = el.value;
      },
      update(el, binding, vNode) {
        console.log(el);
        console.log(binding);
        console.log(vNode);
        el.value = binding.value.replace(/[^\d.]/g, "");
        vNode.context[binding.expression] = el.value;
      },
    },
  },
};
</script>

<style></style>
