<template>
  <div>
    <Header :classify="true" />
    <Main />
  </div>
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Main from "../../components/Classify/Main.vue";
export default {
  components: {
    Header,
    Main,
  },
};
</script>

<style lang="less" scoped></style>
