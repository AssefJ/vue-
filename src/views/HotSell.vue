<template>
  <div>
    <HotHeader />
    <HotMain />
  </div>
</template>

<script>
import HotHeader from "../components/HotSell/HotHeader.vue";
import HotMain from "../components/HotSell/HotMain.vue";
export default {
  data() {
    return {};
  },

  components: {
    HotHeader,
    HotMain,
  },
};
</script>

<style lang="less" scoped></style>
