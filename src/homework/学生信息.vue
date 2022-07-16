<template>
  <!-- ==如果1个按钮不会写, 用2个按钮写==

目标: 

- 需求1: 铺设页面, 准备初始的数据(自己手写数据结构) - 前面是数组索引+1 *作为序号
- 需求2: 当输入框没有值, 要给用户一个提示, 必须都有值才能增加新数据 (数据驱动页面哦)
- 需求3: 添加功能 - 想好数据结构统一对象的key
- 需求4: 点击编辑功能, 把值赋予到输入框上(不要操作dom, 数据驱动页面)
- 需求5: 用户修改后, 点击相同按钮 - 想想怎么判断怎么是添加还是修改的功能 (提示: 准备一个全局变量, 点过编辑按钮可以让它为true) - 实现编辑后更新页面效果
- 需求6: 点击删除, 删除这行数据 -->
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in msg" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="remove(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: [
        {
          name: "洪涛",
          age: 25,
          sex: "女",
        },
        {
          name: "丹丹",
          age: 25,
          sex: "女",
        },
        {
          name: "李磊",
          age: 25,
          sex: "男",
        },
      ],
      sex: "男",
      name: "",
      age: "",
    };
  },
  methods: {
    remove(val) {
      // 方法1
      // this.msg = this.msg.filter((item) => item.id !== val)
      // 方法2
      // const index = this.msg.findIndex((item) => (item.id = val))
      this.msg.splice(val, 1);
    },
    add() {
      if (this.name.trim().length == 0 || this.age.length == 0) {
        alert("信息不能为空哦~ 请记得填写完毕");
      } else {
        //  判断一下人名是否存在
        if (this.msg.filter((item) => item.name == this.name)) {
          const index = this.msg.findIndex((item) => (item.name = this.name));
          this.msg[index].name = this.name;
          this.msg[index].age = this.age;
          this.msg[index].sex = this.sex;
          this.name = "";
          this.age = "";
        } else {
          this.msg.push({
            name: this.name,
            age: this.age,
            sex: this.sex,
          });
          this.name = "";
          this.age = "";
        }
      }
    },
    edit(val) {
      // console.log(val)
      const obj = this.msg[val];
      // console.log(obj)
      this.name = obj.name;
      this.age = obj.age;
      this.sex = obj.sex;
    },
  },
};
</script>
