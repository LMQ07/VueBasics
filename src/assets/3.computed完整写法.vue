<template>
  <div>
    <div>
      <span>姓:</span>
      <input type="text" v-model="firstname" />
    </div>
    <div>
      <span>名:</span>
      <input type="text" v-model="lastname" />
    </div>
    <div>
      <span>姓名:</span>
      <input type="text" v-model="fullname" />
    </div>
  </div>
</template>

<script>
// 问题: 给计算属性赋值 - 需要setter
// 解决:
/*
    完整语法:
    computed: {
        "计算属性名" (){},
        "计算属性名": {
            set(值){

            },
            get(){
                return 值
            }
        }
    }
*/
export default {
  data() {
    return {
      firstname: "zs",
      lastname: "",
    };
  },
  computed: {
    // fullName() {
    //   return this.firstName + " " + this.secName;
    // },
    fullname: {
      set(val) {
        const arr = val.split("-");
        this.firstname = arr[0] || "";
        this.lastname = arr[1] || "";
        // this.firstname= val.split("-")[0] || ""
      },
      get() {
        return this.firstname + "-" + this.lastname;
      },
    },
  },
};
</script>

<style></style>
