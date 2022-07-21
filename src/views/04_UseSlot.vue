<template>
  <div>
    <Panel>
      <h4 slot="title">hehiheihie1</h4>
      <!-- 没有内容的话显示的就是默认内容 -->
    </Panel>
    <Panel>
      <template v-slot:title>
        <h4>哈哈哈哈哈</h4>
      </template>
      <template v-slot:content>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </template>
    </Panel>
    <Panel>
      <template v-slot:content>
        <img src="../assets/mm.gif" alt="" />
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "@/components/04/Panel.vue";

export default {
  name: "Demo03UseSlot",

  data() {
    return {};
  },
  components: {
    Panel,
  },
};
</script>

<style scoped></style>
