<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="isAll" @change="AllCheck" />
            <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <MyTr
          v-for="(item, index) in goodList"
          :key="index"
          :item="item"
          :index="index"
          v-on:checkAll="checkAll"
          @addNum="addNum"
          @reduceNum="reduceNum"
          @deleteList="deleteList"
        ></MyTr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">{{ sum }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import MyTr from "./components/MyTrs";
export default {
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
      isAll: false,
    };
  },
  components: {
    MyTr,
  },
  computed: {
    sum() {
      return this.goodList.reduce((pre, next) => {
        if (next.checked) {
          pre += next.num * next.price;
        }
        return pre;
      }, 0);
    },
  },
  methods: {
    // 全选影响单选
    AllCheck() {
      this.goodList.forEach((item) => {
        item.checked = this.isAll;
      });
    },
    // 单选影响全选
    checkAll(newList, index) {
      this.goodList[index] = newList;
      // console.log(1);
      const newArr = this.goodList.filter((item) => item.checked);
      console.log(newArr);
      if (newArr.length == this.goodList.length) {
        this.isAll = true;
      } else {
        this.isAll = false;
      }
    },
    // 数量的增加事件
    addNum(val) {
      this.goodList[val].num++;
    },
    // 数量的减少
    reduceNum(val) {
      this.goodList[val].num--;
    },
    // 删除事件
    deleteList(index) {
      this.goodList.splice(index, 1);
    },
  },
};
</script>

<style></style>
