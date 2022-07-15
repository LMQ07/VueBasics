<template>
  <div>
    <!-- 
      Vue.set(target, propertyName/index, value)
      或
      vm.$set(target, propertyName/index, value)

    作用：向响应式对象中添加一个 属性，并确保这个新 属性
    同样是响应式的，且触发视图更新 
    
    target: 不能是 Vue 实例，或者 Vue 实例的根数据对象-->

    <!-- <h1>{{ obj.a }}</h1> -->
    <h1>{{ obj.num }}</h1>
    <button @click="change">改变</button>
    <h1>{{ arr[0] }}</h1>
    <button @click="changeArr">改变</button>
    <h1>{{ arr1[0].b }}</h1>
    <button @click="changeArr1">改变</button>
  </div>
</template>

<script>
// 响应式
// 数据变化 ==》 视图直接更新
// 视图 ==》数据更新

export default {
  data() {
    return {
      obj: {
        b: 10,
      },
      arr: [1, 2, 3],
      arr1: [{ b: 2 }],
    }
  },
  computed: {},
  mounted() {
    // console.log(this.obj)
  },
  methods: {
    change() {
      // a此时不是响应式数据
      // this.obj.a = 10
      // console.log(this)
      // $set 对象上就可以有get以及set
      this.$set(this.obj, "num", 100)
    },
    changeArr() {
      this.$set(this.arr, 0, 100) //这个只能改变一次 因为数组里面的普通数据就不会有get以及set
    },
    changeArr1() {
      this.arr1[0].b = 100 // 对象里面的数据就是会有get以及set
    },
  },
}
</script>
