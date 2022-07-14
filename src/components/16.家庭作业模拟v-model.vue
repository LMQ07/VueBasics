<template>
  <div>
    <input type="text" :value="ipt" @input="handleIpt" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      ipt: "123",
    }
  },
  methods: {
    handleIpt(e) {
      this.ipt = e.target.value
    },
  },
}
</script>
