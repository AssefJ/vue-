<template>
  <div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Home/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style lang="less" scoped></style>
