<template>
  <div class="box">
    <Header :shopping="true" />
    <div class="main-box">
      <Clearing />
    </div>
  </div>
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Clearing from "../../components/Shopping/Clearing.vue";
export default {
  data() {
    return {};
  },

  components: {
    Header,
    Clearing,
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  .main-box {
    position: fixed;
    top: 46px;

    bottom: 160px;
  }
}
</style>
