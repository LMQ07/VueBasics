<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{ red: item.price >= 100 }">{{ item.price }}</td>
            <td>{{ item.time | formatTime }}</td>
            <td><a href="#" @click="del(item.id)">删除</a></td>
          </tr>
          <tr style="background-color: #eee">
            <td>统计:</td>
            <td colspan="2">总价钱为: {{ getSum }}</td>
            <td colspan="2">平均价: {{ getAverage }}</td>
          </tr>
        </tbody>

        <tfoot v-if="list.length == 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline" style="display: flex">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
// 1. 明确需求
// 2. 标签+样式+默认数据
// 3. 下载bootstrap, main.js引入bootstrap.css
// 4. 把list数组 - 铺设表格
// 5. 修改价格颜色
import moment from "moment";
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")),
      name: "",
      price: 0,
    };
  },
  methods: {
    addFn() {
      // 判断用户输入是否为空给提示
      if (!this.name.trim() || this.price == 0) {
        this.name = "";
        this.price = 0;
        return alert("不能为空！");
      }
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : "100";
      // const id =
      //   this.list.length == 0 ? "100" : this.list[this.list.length - 1].id + 1;
      this.list.push({
        id: id,
        name: this.name,
        price: this.price,
        time: new Date(),
      });
      this.name = "";
      this.price = 0;
    },
    del(id) {
      this.list = this.list.filter((item) => {
        return item.id != id;
      });
      // const index = this.list.findIndex((item) => item.id == id);
      // this.list.splice(index, 1);
    },
  },
  filters: {
    formatTime: (val) => {
      return moment(val).format("YYYY-MM-DD");
    },
  },
  // 根据依赖项 然后计算出来的
  computed: {
    getSum() {
      return this.list.reduce((sum, next) => {
        // +next.price隐世转换
        return (sum = sum + +next.price);
      }, 0);
    },
    getAverage() {
      // toFixed 保留几位小数的
      return (this.getSum / (this.list.length || 1)).toFixed(1);
    },
  },
  // watch是数据发生变化的时候
  watch: {
    list: {
      immediate: true,
      deep: true,
      handler(val) {
        localStorage.setItem("list", JSON.stringify(val));
      },
    },
  },
};
</script>

<style>
.red {
  color: red;
}
</style>
