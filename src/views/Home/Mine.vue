<template>
  <div>
    <Header :mine="true" />
  </div>
</template>

<script>
import Header from "../../components/Home/Header.vue";
export default {
  data() {
    return {};
  },

  components: {
    Header,
  },
};
</script>

<style lang="less" scoped></style>
