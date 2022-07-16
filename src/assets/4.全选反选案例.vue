<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="getLength" />
    <button @click="reverse">反选</button>
    <ul>
      <li v-for="item in arr" :key="item.name">
        <input type="checkbox" v-model="item.c" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  computed: {
    getLength: {
      get() {
        // 判断arr里面c的值 使用的是every的方法
        return this.arr.every((item) => item.c);
        //   return this.arr.every((item) => {return item.c});
        // return !this.arr.some((item) => !item.c);
      },
      set(val) {
        this.arr.forEach((item) => (item.c = val));
      },
    },
  },
  methods: {
    reverse() {
      this.arr.forEach((item) => (item.c = !item.c));
    },
  },
};
</script>
