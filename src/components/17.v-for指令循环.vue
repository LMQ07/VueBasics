<template>
  <div>
    <!-- 需求:将数组arr的内容渲染到ul中 
      v-for 循环数据 每循环一次 生成对应的dom元素
      key: 唯一值 类型string/number 提高性能
      -->
    <p>学生姓名</p>
    <ul>
      <!-- item 数组里边的每一个元素 -->
      <li v-for="item in arr" :key="item">{{ item }}</li>

      <!-- item 数组里边的每一个元素,
      index 索引号 -->
      <li v-for="(item, index) in arr" :key="index">{{ item }}-{{ index }}</li>
    </ul>
    <p>学生信息</p>
    <ul>
      <li v-for="item in stuArr" :key="item.id">
        {{ item.name }}- {{ item.sex }}-{{ item.hobby }}
      </li>
    </ul>
    <!-- v-for遍历对象(了解) -->
    <ul>
      <!-- 第一个是属性值 第二个是属性名 -->
      <li v-for="(value, item) in tObj" :key="value">{{ item }}-{{ value }}</li>
    </ul>
    <!-- v-for遍历整数(了解) - 从1开始 -->
    <ul>
      <li v-for="item in count" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
1

<script>
export default {
  name: "App",
  data() {
    return {
      arr: ["章三", "李四", "迪丽热巴", "xxx"],
      stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
      tObj: {
        name: "小黑",
        age: 18,
        class: "1期",
      },
      count: 10,
    }
  },
}
</script>

<style></style>
