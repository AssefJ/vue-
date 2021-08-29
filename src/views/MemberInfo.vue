<template>
  <div>
    <MemHeader />
    <MemMain />
  </div>
</template>

<script>
import MemHeader from "../components/MemberInfo/MemHeader.vue";
import MemMain from "../components/MemberInfo/MemMain.vue";

export default {
  setup() {},

  components: {
    MemMain,
    MemHeader,
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f6f6f6");
  },
};
</script>

<style lang="less" scoped></style>
